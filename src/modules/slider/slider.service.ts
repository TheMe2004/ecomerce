import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';

import { ClsService } from "nestjs-cls";
import { CreateSliderDto } from "./dto/create-slider.dto";
import { Category, Slider } from "@prisma/client";
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SliderService {
    constructor(
        private prisma: PrismaService,
        private cls: ClsService
    ) {}

    async create(params: CreateSliderDto) {
 
        let categoryExists: Category | null = null;

        const categoryId = (params.parentId === 0 || params.parentId === null) ? null : params.parentId;
    
     
        if (categoryId !== null) {
            categoryExists = await this.prisma.category.findUnique({
                where: { id: categoryId }
            });
    

            if (!categoryExists) {
                throw new NotFoundException('Kategori bulunamadı!');
            }
        }
    

        const slider = await this.prisma.slider.create({
            data: {
                Title: params.title,
                description: params.description,
                buttonname1: params.buttonname1,
                buttonname2: params.buttonname2, 
                img: params.img,
                mobile: params.mobileimg,
                categoryId: categoryExists ? categoryExists.id : null,
            },
            include: {
                category: true
            }
        });
    
        return slider;
    }
    
    
    async list() {
        return await this.prisma.slider.findMany({
            include: {
                category: true
            }
        });
    }
}