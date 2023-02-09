import {IsNumber, IsString} from "class-validator";
import {IsNull} from "sequelize-typescript";

export class AddRoleDto {
    @IsString({message: 'Should be string'})
    readonly value: string;
    @IsNumber({}, {message: 'Should be number'})
    readonly userId: number;
}