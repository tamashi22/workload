-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" TEXT;

-- CreateTable
CREATE TABLE "Workload" (
    "id" SERIAL NOT NULL,
    "educationYearId" INTEGER NOT NULL,
    "rupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndividualPlan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "educationYearId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndividualPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annoucement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "file" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "educationYearId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Annoucement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_rupId_fkey" FOREIGN KEY ("rupId") REFERENCES "Rup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndividualPlan" ADD CONSTRAINT "IndividualPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndividualPlan" ADD CONSTRAINT "IndividualPlan_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annoucement" ADD CONSTRAINT "Annoucement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annoucement" ADD CONSTRAINT "Annoucement_educationYearId_fkey" FOREIGN KEY ("educationYearId") REFERENCES "EducationYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
