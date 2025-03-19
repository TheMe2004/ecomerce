import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, MinLength, IsInt } from 'class-validator';

export class CreateCategoryDto {
  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ example: 'elektronika', required: true })
  name: string;

  @Type()
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'elektronika', required: false })
  slug?: string;

  @Type()
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  img: string;

 

  @Type()
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  parentId?: number;
}