import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule]
})
export class AppModule {}
