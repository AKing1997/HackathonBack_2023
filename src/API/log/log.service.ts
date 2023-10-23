import { Injectable } from '@nestjs/common';
import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LogDto } from './dto/log.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class LogService {
    constructor(@InjectRepository(Log) private logRepository: Repository<Log>, private readonly userService: UserService){}

    async log(logDto: LogDto) {
        const user: User = await this.userService.getUser(logDto.UserId);

        const log = new Log();
        log.Api = logDto.Api;
        log.Enpoint = logDto.Enpoint;
        log.User = user;

        const createdLog = this.logRepository.create(log);
        await this.logRepository.save(createdLog);
    }
}
