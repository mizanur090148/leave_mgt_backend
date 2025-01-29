import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean, Length } from 'class-validator';

export class CreateLeaveDto {
  @IsString()
  @Length(3, 40)
  name: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 1)
  status?: boolean;
}

