import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: 'Should be string'})
    @IsEmail({}, {message: 'Email is incorrect'})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'Password'})
    @IsString({message: 'Should be string'})
    @Length(4, 16, {message: 'No less than 4 letters and no more than 16'})
    readonly password: string;
}