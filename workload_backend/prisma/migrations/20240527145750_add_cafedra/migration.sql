-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cafedraId" INTEGER,
ALTER COLUMN "degree" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Cafedra" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cafedra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfStudents" INTEGER NOT NULL,
    "cafedraId" INTEGER NOT NULL,
    "course" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "scolashipStudents" INTEGER NOT NULL,
    "contractStudents" INTEGER NOT NULL,
    "educationYearId" INTEGER,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationYear" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cafedraId" INTEGER NOT NULL,

    CONSTRAINT "EducationYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rup" (
    "id" SERIAL NOT NULL,
    "disciplineCode" TEXT NOT NULL,
    "nameOfDiscipline" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "credits" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "totalHours" TEXT NOT NULL,
    "lectures" TEXT,
    "laboratories" TEXT,
    "practical" TEXT,
    "independentWorks" TEXT,
    "y1s1_laboratories" TEXT,
    "y1s1_practical" TEXT,
    "y1s1_credits" TEXT,
    "y1s1_lectures" TEXT,
    "y1s2_laboratories" TEXT,
    "y1s2_practical" TEXT,
    "y1s2_credits" TEXT,
    "y1s2_lectures" TEXT,
    "y2s3_laboratories" TEXT,
    "y2s3_practical" TEXT,
    "y2s3_credits" TEXT,
    "y2s3_lectures" TEXT,
    "y2s4_laboratories" TEXT,
    "y2s4_practical" TEXT,
    "y2s4_credits" TEXT,
    "y2s4_lectures" TEXT,
    "y3s5_laboratories" TEXT,
    "y3s5_practical" TEXT,
    "y3s5_credits" TEXT,
    "y3s5_lectures" TEXT,
    "y3s6_laboratories" TEXT,
    "y3s6_practical" TEXT,
    "y3s6_credits" TEXT,
    "y3s6_lectures" TEXT,
    "y4s7_laboratories" TEXT,
    "y4s7_practical" TEXT,
    "y4s7_credits" TEXT,
    "y4s7_lectures" TEXT,
    "y4s8_laboratories" TEXT,
    "y4s8_practical" TEXT,
    "y4s8_credits" TEXT,
    "y4s8_lectures" TEXT,
    "zachet" TEXT,
    "courseWorks" TEXT,
    "stateExam" TEXT,
    "educationYearId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cafedra_name_key" ON "Cafedra"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EducationYear_name_key" ON "EducationYear"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationYear" ADD CONSTRAINT "EducationYear_cafedraId_fkey" FOREIGN KEY ("cafedraId") REFERENCES "Cafedra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rup" ADD CONSTRAINT "Rup_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
