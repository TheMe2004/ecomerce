import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Auth } from "src/shared/decorators/auth.decorator";
import { UserRole } from "@prisma/client";
import { CreateProductDto, UpdateProductDto } from "./dto/create-product.dto";
import { UpsertProductVariantDto } from "./dto/upsert-variant-product.dto";
import { GetProductListDto } from "./dto/get-product-list.dto";
import { UpsertProductSpecDto } from "./dto/upsert-product.spec.dto";

@Controller('products')
export class ProductController{
constructor( private ProductService: ProductService){}

@Get()
list(@Query() query: GetProductListDto) {
  return this.ProductService.list(query);
}

@Get(':id')
item(@Param('id') id: number) {
  return this.ProductService.item(id);
}

@Post()
@Auth(UserRole.ADMIN)
createProduct(@Body() body: CreateProductDto) {
  return this.ProductService.createProduct(body);
}

@Put(':id')
@Auth(UserRole.ADMIN)
updateProduct(@Param('id') id: number, @Body() body: UpdateProductDto) {
  return this.ProductService.updateProduct(id, body);
}

@Delete(':id')
@Auth(UserRole.ADMIN)
deleteProduct(@Param('id') id: number) {
  return this.ProductService.deleteProduct(id);
}

@Post(':id/variant')
@Auth(UserRole.ADMIN)
upsertVariant(
  @Param('id') id: number,
  @Body() body: UpsertProductVariantDto,
) {
  return this.ProductService.upsertVariant(id, body);
}

@Post(':id/spec')
@Auth(UserRole.ADMIN)
upsertProductSpec(
  @Param('id') id: number,
  @Body() body: UpsertProductSpecDto,
) {
  return this.ProductService.upsertProductSpec(id, body);
}

@Delete(':id/spec/:specKey')
@Auth(UserRole.ADMIN)
deleteProductSpec(
  @Param('id') id: number,
  @Param('specKey') specKey: string,
) {
  return this.ProductService.deleteProductSpec(id, specKey);
}
}