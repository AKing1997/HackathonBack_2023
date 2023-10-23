import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { SkinService } from './skin.service';
import { SkinDto } from './dto/skin.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { API } from '../enums/enums';
import { UserSkinDto } from '../userSkin/dto/userSkin.dto';

@ApiBearerAuth()
@ApiTags(API.SKIN)
@Controller(API.SKIN)
export class SkinController {
  constructor(private readonly skinService: SkinService) {}

  @Get('avaible')
  @ApiOperation({ summary: 'Obtener todas las skins disponibles', description: 'Devuelve una lista de todas las skins disponibles para comprar.' })
  avaible() {
    return this.skinService.avaible();
  } 

  @Post('buy')
  @ApiOperation({ summary: 'Comprar una skin', description: 'Permite a los usuarios adquirir una skin comprando.' })
  @ApiBody({ type: UserSkinDto, description: 'Datos de la skin que se va a comprar' })
  buy(@Body() skinDto: UserSkinDto, @Req() req) {
    return this.skinService.buy(req.user?.sub, skinDto);
  }

  @Get('mySkins')
  @ApiOperation({ summary: 'Obtener tus skins', description: 'Devuelve una lista de las skins compradas por el usuario.' })
  mySkins(@Req() req) {
    return this.skinService.mySkins(req.user?.sub);
  }

  @Put("color")
  @ApiOperation({ summary: 'Cambiar el color de una skin', description: 'Permite a los usuarios cambiar el color de una skin comprada.' })
  @ApiBody({ type: UserSkinDto, description: 'Datos de la skin con el nuevo color' })
  color(@Body() skinDto: UserSkinDto, @Req() req) {
    return this.skinService.color(req.user?.sub, skinDto);
  }

  @Delete('delete/:skinId')
  @ApiOperation({ summary: 'Eliminar una skin', description: 'Permite a los usuarios eliminar una skin comprada por su ID.' })
  @ApiParam({ name: 'skinId', description: 'ID de la skin que se desea eliminar', type: 'number' })
  delete(@Param('skinId') skinId: number, @Req() req) {
    return this.skinService.delete(req.user?.sub, skinId);
  }

  @Get('getSkin/:skinId')
  @ApiOperation({ summary: 'Obtener una skin específica', description: 'Devuelve una skin específica por su ID.' })
  @ApiParam({ name: 'skinId', description: 'ID de la skin que se desea obtener', type: 'number' })
  getSkin(@Param('skinId') skinId: number, @Req() req) {
    return this.skinService.getSkin(req.user?.sub, skinId);
  }

  @ApiOperation({ summary: 'Crear una nueva skin' })
  @ApiBody({ type: SkinDto })
  @Post('createSkin')
  async createSkin(@Body() skinDto: SkinDto) {
    const newSkin = await this.skinService.createSkin(skinDto);
    return newSkin;
  }

  @ApiOperation({ summary: 'Crear varias skins' })
  @ApiBody({ type: [SkinDto] })
  @Post('createSkins')
  async createSkins(@Body() skinDtos: SkinDto[]) {
    const newSkins = await this.skinService.createSkins(skinDtos);
    return newSkins;
  }
}