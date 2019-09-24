import { Controller, Get, Post, Delete, Put, Param, Query, Body } from '@nestjs/common';
import { QueryDto } from '../common/query.dto'
import { UserDto } from './user.dto'

@Controller('user')
export class UserController {
    @Get(':id')
    detail(@Param('id') id: string): string {
        return `id: ${id}`;
    }
    @Get('list')
    list(@Query() query: QueryDto): string {
        return `offset: ${query.offset}, limit: ${query.limit}, sort: ${query.sort}`;
    }

    @Post()
    add(@Body() user: UserDto): string {
        return `name: ${user.name}, password: ${user.password}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: UserDto): string {
        return `id: ${id}, name: ${user.name}, password: ${user.password}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): String {
        return `id: ${id}`;
    }
}
