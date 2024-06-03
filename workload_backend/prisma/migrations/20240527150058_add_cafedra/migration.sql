/*
  Warnings:

  - Made the column `cafedraId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cafedraId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "cafedraId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
