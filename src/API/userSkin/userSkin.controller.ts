import { Controller, Get, Post, Body, Param, Delete, Req } from '@nestjs/common';
import { UserSkinService } from './userSkin.service';
import { UserSkinDto } from './dto/userSkin.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { API } from '../enums/enums';

@ApiBearerAuth()
@ApiTags(API.USER_SKIN)
@Controller(API.USER_SKIN)
export class UserSkinController {
  constructor(private readonly userSkinService: UserSkinService) {}

    @Post('createUserSkin')
    async createUserSkin(@Body() userSkinDto: UserSkinDto, @Req() req) {
        const createdUserSkin = await this.userSkinService.createUserSkin(req.user?.sub, userSkinDto);
        return createdUserSkin;
    }

    @Get('getUserSkins/:userId')
    async getUserSkins(@Param('userId') userId: number) {
        const userSkins = await this.userSkinService.getUserSkins(userId);
        return userSkins;
    }

    @Get('getUserSkin/:skinId')
    async getUserSkin(@Param('skinId') skinId: number) {
        const userSkin = await this.userSkinService.getUserSkin(1, skinId);
        return userSkin;
    }

    @Delete('deleteUserSkin/:skinId')
    async deleteUserSkin(@Param('skinId') skinId: number) {
        await this.userSkinService.deleteUserSkin(1, skinId);
        return { message: 'UserSkin eliminado exitosamente' };
    }

}
