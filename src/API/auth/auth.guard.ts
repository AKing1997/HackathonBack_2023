import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY, JwtConstants, getEnumValue } from '../constants/constants';
import { Reflector } from '@nestjs/core';
import { API, ApiEndPoint } from '../enums/enums';
import { LogService } from '../log/log.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector, private logService: LogService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        const apiAndEndpoint: [API, ApiEndPoint] = this.getApiAndEndpointFromUrl(request.url);

        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: JwtConstants.secret,
            });
            request['user'] = payload;
            this.logService.log({
                UserId: request.user?.sub,
                Api: apiAndEndpoint[0],
                Enpoint: apiAndEndpoint[1],
            });    
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }

    private getApiAndEndpointFromUrl(url: string): [API, ApiEndPoint] {
        const segments = url.split('/').filter((segment) => !!segment); // Elimina segmentos vacíos
        let api: API = API.AUTH;
        let endpoint: ApiEndPoint = ApiEndPoint.AUTH;
        
        if (segments.length >= 1) {
            api = getEnumValue(API, segments[0], API.AUTH);
        }

        if (segments.length >= 2) {
            endpoint = getEnumValue(ApiEndPoint, segments.slice(0, 2).join('/'), ApiEndPoint.AUTH);
        }

        return [api, endpoint];
    }
}  