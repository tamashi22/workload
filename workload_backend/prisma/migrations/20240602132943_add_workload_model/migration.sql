/*
  Warnings:

  - Added the required column `course` to the `Workload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credits` to the `Workload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discipline` to the `Workload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `Workload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfStudents` to the `Workload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semester` to the `Workload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workload" ADD COLUMN     "cheksByHeadOfCafedra" TEXT,
ADD COLUMN     "cheksOfWorks" TEXT,
ADD COLUMN     "consultationsByTeacher" TEXT,
ADD COLUMN     "consultationsIndividual" TEXT,
ADD COLUMN     "consultationsOnline" TEXT,
ADD COLUMN     "contractHours" TEXT,
ADD COLUMN     "contractStudents" TEXT,
ADD COLUMN     "course" TEXT NOT NULL,
ADD COLUMN     "courseWorksByAccept" TEXT,
ADD COLUMN     "courseWorksByManagement" TEXT,
ADD COLUMN     "courseWorksByRup" TEXT,
ADD COLUMN     "credits" TEXT NOT NULL,
ADD COLUMN     "diplomConsultations" TEXT,
ADD COLUMN     "diplomExams" TEXT,
ADD COLUMN     "diplomManagement" TEXT,
ADD COLUMN     "diplomReviews" TEXT,
ADD COLUMN     "discipline" TEXT NOT NULL,
ADD COLUMN     "eduPractice" TEXT,
ADD COLUMN     "exams" TEXT,
ADD COLUMN     "group" TEXT NOT NULL,
ADD COLUMN     "individualWorks" TEXT,
ADD COLUMN     "interships" TEXT,
ADD COLUMN     "labaratoriesByRup" TEXT,
ADD COLUMN     "labaratoriesByWorkload" TEXT,
ADD COLUMN     "lectionsByRup" TEXT,
ADD COLUMN     "lectionsByWorkload" TEXT,
ADD COLUMN     "numberOfStudents" TEXT NOT NULL,
ADD COLUMN     "numberOfStudentsWithCoef" TEXT,
ADD COLUMN     "practicalByRup" TEXT,
ADD COLUMN     "practicalByWorkload" TEXT,
ADD COLUMN     "reviewsOfworks" TEXT,
ADD COLUMN     "scolarshipHours" TEXT,
ADD COLUMN     "scolarshipStudents" TEXT,
ADD COLUMN     "semester" TEXT NOT NULL,
ADD COLUMN     "tests" TEXT,
ADD COLUMN     "totalWorkloadHours" TEXT;
