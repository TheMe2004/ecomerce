/*
  Warnings:

  - You are about to drop the column `price` on the `ProductVariant` table. All the data in the column will be lost.
  - Added the required column `returns` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PriceRole" AS ENUM ('AZN', 'USD');

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "price",
ADD COLUMN     "returns" TEXT NOT NULL,
ADD COLUMN     "role" "PriceRole" NOT NULL DEFAULT 'AZN',
ADD COLUMN     "shipping" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL;
