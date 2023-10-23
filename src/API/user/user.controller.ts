import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { API } from '../enums/enums';
import { Public } from '../constants/constants';

@ApiTags(API.USER)
@Controller(API.USER)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiBody({ type: UserDto })
  @Post('register')
  @Public()
  async register(@Body() userDto: UserDto) {
    const user = await this.userService.register(userDto);
    return user;
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener un usuario por su ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del usuario' })
  @Get('getUser/:id')
  async getUser(@Param('id') id: number) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }
}
