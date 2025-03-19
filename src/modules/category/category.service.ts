import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Category } from '@prisma/client';
import { CategoryWithChildren } from "./category.types";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { ClsService } from "nestjs-cls";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService, private cls: ClsService) {}

  childCategories(list: Category[], category: Category): CategoryWithChildren {
    let children = list
      .filter((item) => item.parentId === category.id) 
      .map((item) => this.childCategories(list, item)); 

    return {
      ...category,
      children: children.length ? children : undefined,
    };
  }

  async list() {
    let list = await this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        img: true,
        parentId: true,
        products: true,  
        sliders: true,  
      },
    });
  
    let categoriesWithChildren: CategoryWithChildren[] = [];
    let rootCategories = list.filter((cat) => !cat.parentId);
  
    for (const category of rootCategories) {
      categoriesWithChildren.push(this.childCategories(list, category));
    }
  
    return categoriesWithChildren;
  }
  
  async create(params: CreateCategoryDto) {
    let parentCategory: Category | null = null;
  
    if (params.parentId) {
      parentCategory = await this.prisma.category.findUnique({
        where: { id: params.parentId },
      });
  
      if (!parentCategory) {
        throw new NotFoundException('Parent category not found');
      }
    }
  
    let category = await this.prisma.category.create({
      data: {
        name: params.name,
        img: params.img,
        parent: params.parentId ? { connect: { id: params.parentId } } : undefined,
        slug: params.slug ?? "",
      },
    });

    return category
  }
  
  async update(id: number, params: UpdateCategoryDto) {
    let category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) throw new NotFoundException('Category not found');

    await this.prisma.category.update({
      where: { id },
      data: params,
    });

    return {
      message: 'Category is updated successfully',
    };
  }


  async delete(id: number) {
    let category = await this.prisma.category.delete({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return {
      message: 'Category is deleted successfully',
    };
  }
}

