/*
  Warnings:

  - You are about to drop the column `role` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('AZN', 'USD');

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "role",
ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'USD',
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "PriceRole";
