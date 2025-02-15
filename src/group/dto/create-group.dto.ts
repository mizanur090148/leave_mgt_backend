// src/group/dto/create-group.dto.ts
import { IsString, IsOptional, IsBoolean, IsEmail, Length } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @Length(3, 50)
  name: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  responsible_person?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  mobile_no?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}