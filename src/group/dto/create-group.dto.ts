
import { IsString, IsOptional, MaxLength, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateGroupDto {
    @IsString()
    @MaxLength(60)
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(120)
    address?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    responsible_person?: string;

    @IsOptional()
    @IsEmail()
    @MaxLength(40)
    email?: string;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    mobile_no?: string;
}
