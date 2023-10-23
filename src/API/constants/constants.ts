
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const Auth = {
    PASSWORD_SALT: 10,
}

// API Access adress
export const ApiHost = {
    HOST: 'localhost',
    PORT: 3000
}

export const JwtConstants = {
    secret: "P-*M1'f6w\FT)8H8fz2%£?XF@8t453"
}

export function getEnumValue(enumObj: any, value: string, defaultValue: any): any {
    for (const key in enumObj) {
        if (enumObj[key] === value) {
            return enumObj[key];
        }
    }
    return defaultValue;
}
