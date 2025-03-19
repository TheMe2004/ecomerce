import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserRegisterDto {
  @Type()
  @IsEmail()
  @ApiProperty({ default: 'Mehemmed200405@gmail.com' })
  email: string;

  @Type()
  @IsString()
  @ApiProperty({ default: 'Mehemmed200405' })
  @MinLength(6)
  password: string;
}