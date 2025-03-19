import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateSliderDto {
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