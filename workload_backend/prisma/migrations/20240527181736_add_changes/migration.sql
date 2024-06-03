/*
  Warnings:

  - Made the column `educationYearId` on table `Group` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_educationYearId_fkey";

-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "educationYearId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
