/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Slider" ADD COLUMN     "Title" TEXT NOT NULL DEFAULT 'default title',
ADD COLUMN     "buttonname1" TEXT NOT NULL DEFAULT 'default button1',
ADD COLUMN     "buttonname2" TEXT NOT NULL DEFAULT 'default button2',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'default description';

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
