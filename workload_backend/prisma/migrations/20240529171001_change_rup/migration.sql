/*
  Warnings:

  - A unique constraint covering the columns `[disciplineCode]` on the table `Rup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rup_disciplineCode_key" ON "Rup"("disciplineCode");
