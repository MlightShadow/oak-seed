import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { 
  constructor(private readonly connection: Connection) { } 
}
