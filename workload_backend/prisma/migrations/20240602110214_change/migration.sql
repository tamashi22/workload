/*
  Warnings:

  - Added the required column `cafedraId` to the `Workload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rup" ADD COLUMN     "cafedraId" INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE "Workload" ADD COLUMN     "cafedraId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Rup" ADD CONSTRAINT "Rup_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
