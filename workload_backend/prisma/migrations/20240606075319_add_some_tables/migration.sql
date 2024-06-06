-- AlterTable
ALTER TABLE "Annoucement" ALTER COLUMN "file" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Workload" ADD COLUMN     "examsColumn" INTEGER,
ADD COLUMN     "hoursPhond" TEXT,
ADD COLUMN     "laboratories" INTEGER,
ADD COLUMN     "lectures" INTEGER,
ADD COLUMN     "other" INTEGER,
ADD COLUMN     "practice" INTEGER;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_practice_fkey" FOREIGN KEY ("practice") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_lectures_fkey" FOREIGN KEY ("lectures") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_laboratories_fkey" FOREIGN KEY ("laboratories") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_examsColumn_fkey" FOREIGN KEY ("examsColumn") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workload" ADD CONSTRAINT "Workload_other_fkey" FOREIGN KEY ("other") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
