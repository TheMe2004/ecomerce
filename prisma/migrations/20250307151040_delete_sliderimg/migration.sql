/*
  Warnings:

  - You are about to drop the column `slider` on the `Slider` table. All the data in the column will be lost.
  - Added the required column `img` to the `Slider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slider" DROP COLUMN "slider",
ADD COLUMN     "img" TEXT NOT NULL;
