import { ApiProperty } from '@nestjs/swagger';
import { Currency } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UpsertProductVariantSpecDto {
  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: 'color' })
  key: string;

  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: 'orange' })
  value: string;
}

export class UpsertProductVariantDto {
  @Type()
  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiProperty({ default: 0 })
  stock: number;

  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: '' })
  slug: string;


  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: '' })
  shipping: string


  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: '' })
  returns: string


  @Type()
  @IsString()
  @MinLength(1)
  @ApiProperty({ default: 'M' })
  size: string[];


  @Type()
  @IsString()
  @MinLength(3)
  @ApiProperty({ default: '' })
  description: string

  @Type()
  @IsInt()
  @Min(1)
  @ApiProperty({ default: 1 })
  price: number;

  @Type()
  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiProperty({ default: 0 })
  discount: number;

  @Type()
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  @ApiProperty({ default: [] })
  images: string[];

  @Type()
  @IsEnum(Currency)
  @ApiProperty({ enum: Currency, default: Currency.USD })
  currency: Currency;

  @Type(() => UpsertProductVariantSpecDto)
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ type: UpsertProductVariantSpecDto, isArray: true })
  specs: UpsertProductVariantSpecDto[];
}