import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from '../../entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        public readonly userRepository: UserRepository
    ) { }

    add(dto: UserDto): UserEntity {
        let uuidv4 = require('uuid/v4')
        let md5 = require('js-md5');
        let user = new UserEntity;
        user.name = dto.name;
        user.password = md5(dto.password);
        user.id = uuidv4().replace(/-/g,'');
        this.userRepository.save(user);
        return user;
    }

    update(id: string, dto: UserDto): UserEntity {
        let user = new UserEntity;
        user.name = dto.name;
        user.password = dto.password;
        user.id = id;
        return user;
    }

    delete(id: string): Boolean {
        return true;
    }
}
