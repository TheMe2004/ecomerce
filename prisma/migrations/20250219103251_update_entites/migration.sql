/*
  Warnings:

  - You are about to drop the `ProductTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Translation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryTranslation" DROP CONSTRAINT "_CategoryTranslation_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryTranslation" DROP CONSTRAINT "_CategoryTranslation_B_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Unnamed Category',
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT 'unnamed-category';

-- AlterTable
ALTER TABLE "ProductVariant" ALTER COLUMN "slug" SET DEFAULT 'default-variant';

-- DropTable
DROP TABLE "ProductTranslation";

-- DropTable
DROP TABLE "Translation";

-- DropTable
DROP TABLE "_CategoryTranslation";
