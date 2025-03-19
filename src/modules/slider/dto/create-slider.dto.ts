import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSliderDto {
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    id: number;

    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    title: string;

    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    description: string;
    
    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    buttonname1: string;

    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    buttonname2: string;




    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    img: string;


    @Type()
    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    mobileimg: string;



    @Type(() => Number)
    @IsInt()
    @IsOptional()
    @ApiProperty({ required: false, nullable: true })
    parentId?: number;
} 