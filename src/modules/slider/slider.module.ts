import { Module } from "@nestjs/common";
import { SliderController } from "./slider.controller";
import { SliderService } from "./slider.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [],
  controllers: [SliderController],
  providers: [PrismaService,SliderService],
  exports:[SliderService]
})
export class SliderModule{

}