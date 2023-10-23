import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Skin } from './API/skin/entities/skin.entity';
import { Log } from './API/log/entities/log.entity';
import { User } from './API/user/entities/user.entity';
import { UserSkin } from './API/userSkin/entities/userSkin.entity';

import { UserController } from './API/user/user.controller';
import { SkinController } from './API/skin/skin.controller';
import { AuthController } from './API/auth/auth.controller';
import { UserSkinController } from './API/userSkin/userSkin.controller';

import { SkinService } from './API/skin/skin.service';
import { UserSkinService } from './API/userSkin/userSkin.service';
import { UserService } from './API/user/user.service';
import { LogService } from './API/log/log.service';

import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './API/constants/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './API/auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'skins',
    entities: [Skin, UserSkin, User, Log],
    synchronize: false,
  }),
  TypeOrmModule.forFeature([Skin, UserSkin, User, Log]),
  JwtModule.register({
    global: true,
    secret: JwtConstants.secret,
    signOptions: { expiresIn: '1h' },
  }),
],
  controllers: [SkinController, UserSkinController, UserController, AuthController],
  providers: [SkinService, UserSkinService, UserService, LogService, { provide: APP_GUARD, useClass: AuthGuard }],
  exports: [TypeOrmModule, SkinService, UserSkinService, UserService, LogService],
})
export class AppModule {}
