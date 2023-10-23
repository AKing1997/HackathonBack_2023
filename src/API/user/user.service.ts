import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { AuthDto } from '../auth/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Auth } from '../constants/constants';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, private jwtService: JwtService) { }

    async register(userDto: UserDto): Promise<UserDto> {
        userDto.Password = await bcrypt.hash(userDto.Password, Auth.PASSWORD_SALT);
        const user = this.userRepository.create(userDto);
        const createdUser = await this.userRepository.save(user);
        createdUser.Password = "";
        return createdUser;
    }

    async getUser(userId: number): Promise<User | undefined> {
        return await this.userRepository.findOne({
            where: {
                Id: userId
            }
        });
    }

    async verifyUser(authDto: AuthDto){
        const user =  await this.userRepository.findOne({
            where: {
                UserName: authDto.UserName
            },
            select: { Id: true, UserName: true, Password: true }
        });
        if (!user) {
            throw new NotFoundException(`No se encontró el usuario con el userName: ${authDto.UserName}`);
        }

        const isMatch = await bcrypt.compare(authDto.Password, user.Password);

        if(!isMatch) throw new UnauthorizedException();

        const payload = { sub: user.Id, username: user.UserName };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
