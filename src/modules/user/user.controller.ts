import { Controller, Get, Post, Delete, Put, Param, Query, Body } from '@nestjs/common';
import { QueryDto } from '../../common/query.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from '../../entity/user.entity';
import { UserService } from './user.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get(':id')
    detail(@Param('id') id: string): string {
        return `id: ${id}`;
    }
    @Get('list')
    list(@Query() query: QueryDto): string {
        return `offset: ${query.offset}, limit: ${query.limit}, sort: ${query.sort}`;
    }

    @Post()
    add(@Body() user: UserDto): UserEntity {
        return this.userService.add(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: UserDto): UserEntity {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: string): String {
        return `id: ${id}`;
    }
}
