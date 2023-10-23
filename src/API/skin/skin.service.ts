import { Injectable } from '@nestjs/common';
import { SkinDto } from './dto/skin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skin } from './entities/skin.entity';
import { Repository } from 'typeorm';
import { UserSkinService } from '../userSkin/userSkin.service';
import { UserSkinDto } from '../userSkin/dto/userSkin.dto';

@Injectable()
export class SkinService {
  constructor(@InjectRepository(Skin) private skinRepository: Repository<Skin>, private readonly userSkinService: UserSkinService){}

  avaible() {
    return this.skinRepository.find();
  }
  
  buy(userId:number, skinDto: UserSkinDto) {
    return this.userSkinService.createUserSkin(userId, skinDto);
  }

  mySkins(userId: number) {
    return this.userSkinService.getUserSkins(userId);
  }
  
  color(userId: number, skinDto: UserSkinDto) {
    return this.userSkinService.updateSkin(userId, skinDto);
  }
  
  delete(userId: number, skinId: number) {
    return this.userSkinService.deleteUserSkin(userId, skinId);
  }
  
  getSkin(userId: number, skinId: number) {
    return this.userSkinService.getUserSkin(userId, skinId);
  }

  async createSkin(skinDto: SkinDto): Promise<Skin> {
    const newSkin = this.skinRepository.create(skinDto);
    return await this.skinRepository.save(newSkin);
  }

  async createSkins(skinDtos: SkinDto[]): Promise<Skin[]> {
    const newSkins = this.skinRepository.create(skinDtos);
    return await this.skinRepository.save(newSkins);
  }
}
