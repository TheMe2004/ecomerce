-- CreateTable
CREATE TABLE "Slider" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "parentId" INTEGER,
    "categoryId" INTEGER,
    "productId" INTEGER,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Slider" ADD CONSTRAINT "Slider_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slider" ADD CONSTRAINT "Slider_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
