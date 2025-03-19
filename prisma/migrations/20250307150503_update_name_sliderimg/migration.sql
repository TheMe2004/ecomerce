/*
  Warnings:

  - You are about to drop the column `img` on the `Slider` table. All the data in the column will be lost.
  - Added the required column `slider` to the `Slider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slider" DROP COLUMN "img",
ADD COLUMN     "slider" TEXT NOT NULL;
