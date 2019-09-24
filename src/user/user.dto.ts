import { ApiModelProperty } from '@nestjs/swagger'

export class UserDto {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly password: string;
}