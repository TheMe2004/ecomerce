import { Body, Controller, Get, Post } from "@nestjs/common";
import { SliderService } from "./slider.service";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { UpdateSliderDto } from "./dto/update-slider.dto";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Auth } from "src/shared/decorators/auth.decorator";
import { UserRole } from "@prisma/client";

@Controller('Slider')
export class SliderController{
constructor(
private SliderService: SliderService
){}

@Get()
list(){
    return this.SliderService.list()
}

@Post()
@ApiBearerAuth()
@Auth(UserRole.ADMIN)
create(@Body()  body: CreateSliderDto){
    return this.SliderService.create(body)
}


}