import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSkin } from './entities/userSkin.entity';
import { UserSkinDto } from './dto/userSkin.dto';
import { Skin } from '../skin/entities/skin.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class UserSkinService {
    constructor(
        @InjectRepository(UserSkin) private userSkinRepository: Repository<UserSkin>, // Cambiar a userSkinRepository
        @InjectRepository(Skin) private skinRepository: Repository<Skin>,
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async createUserSkin(userId: number, userSkinDto: UserSkinDto): Promise<UserSkin> {
        const skin = await this.skinRepository.findOne({
            where: {
                Id: userSkinDto.SkinId
            }
        });

        const user = await this.userRepository.findOne({
            where: {
                Id: userId
            }
        });

        if (!skin || !user) {
            throw new Error('No se encontró la Skin o el Usuario correspondiente.');
        }
        
        var existSkin = await this.userSkinRepository.findOne({where: {
            User: {Id: user.Id},
            SkinId: skin.Id
        }});
        if(existSkin) throw new ConflictException("Hay tiene el skin");
        
        const userSkin = {
            SkinId: skin.Id,
            Nombre: skin.Nombre,
            Precio: skin.Precio,
            Color: skin.Color,
            Tipos: skin.Tipos,
            User: user
         };

        const userSkinCreated = this.userSkinRepository.create(userSkin);

        return await this.userSkinRepository.save(userSkinCreated);
    }

    async getUserSkins(userId: number): Promise<UserSkin[]> {
        const userSkins = await this.userSkinRepository.find({
            where: {
                User: { Id: userId },
            }
        });

        return userSkins;
    }

    async getUserSkin(userId: number, userSkinId: number): Promise<UserSkin | undefined> {
        const userSkin = await this.userSkinRepository.findOne({
            where: {
                User: { Id: userId },
                Id: userSkinId
            }
        });

        if (!userSkin) {
            return undefined;
        }

        return userSkin;
    }

    async deleteUserSkin(userId: number, userSkinId: number): Promise<string> {
        const userSkin = this.getUserSkin(userId, userSkinId);
        if (!userSkin) throw new NotFoundException("No se ha podido eliminar.");
        await this.userSkinRepository.delete((await userSkin).Id);
        return "El skin se ha eliminado correctamente."
    }

    async updateSkin(userId: number, skinDto: UserSkinDto) {
        var userSkin: UserSkin = await this.userSkinRepository.findOne({ where: { User: { Id: userId }, Id: skinDto.Id } });
        if (!userSkin) throw new NotFoundException("No se ha encontrado datos.");
        userSkin.Color = skinDto.Color;
        userSkin.UpdateDate = new Date();
        this.userSkinRepository.update(userSkin.Id, userSkin);
        return userSkin;
    }
}
