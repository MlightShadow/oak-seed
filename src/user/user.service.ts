import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    add(dto: UserDto): UserEntity {
        let uuidv4 = require('uuid/v4')
        let md5 = require('js-md5');
        let user = new UserEntity;
        user.name = dto.name;
        user.password = md5(dto.password);
        user.id = uuidv4();
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
