// src/group/dto/create-group.dto.ts
import { IsString, IsOptional, IsBoolean, IsEmail } from 'class-validator';

export class CreateGroupDto {
  @IsString()
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