import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { 
  constructor(private readonly connection: Connection) { } 
}
