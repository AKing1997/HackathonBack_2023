import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { API } from '../enums/enums';
import { UserService } from '../user/user.service';
import { Public } from '../constants/constants';

@ApiTags(API.AUTH)
@Controller(API.AUTH)
@Public()
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async auth(@Body() authDto: AuthDto){
    return await this.userService.verifyUser(authDto);
  }
}
