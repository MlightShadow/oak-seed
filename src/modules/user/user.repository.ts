import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { UserEntity } from '../../entity/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> { }
