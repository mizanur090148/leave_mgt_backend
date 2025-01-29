import { IsString, IsNumber, IsOptional, IsBoolean, IsEmail, Length } from 'class-validator';

export class CreateCompanyDto {
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
  @IsNumber()
  group_id?: number | null;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}

