/*
  Warnings:

  - You are about to drop the column `y1s1_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s1_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s1_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s1_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s2_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s2_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s2_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y1s2_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s3_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s3_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s3_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s3_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s4_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s4_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s4_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y2s4_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s5_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s5_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s5_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s5_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s6_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s6_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s6_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y3s6_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s7_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s7_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s7_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s7_practical` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s8_credits` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s8_laboratories` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s8_lectures` on the `Rup` table. All the data in the column will be lost.
  - You are about to drop the column `y4s8_practical` on the `Rup` table. All the data in the column will be lost.
  - Added the required column `stavka` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rup" DROP COLUMN "y1s1_credits",
DROP COLUMN "y1s1_laboratories",
DROP COLUMN "y1s1_lectures",
DROP COLUMN "y1s1_practical",
DROP COLUMN "y1s2_credits",
DROP COLUMN "y1s2_laboratories",
DROP COLUMN "y1s2_lectures",
DROP COLUMN "y1s2_practical",
DROP COLUMN "y2s3_credits",
DROP COLUMN "y2s3_laboratories",
DROP COLUMN "y2s3_lectures",
DROP COLUMN "y2s3_practical",
DROP COLUMN "y2s4_credits",
DROP COLUMN "y2s4_laboratories",
DROP COLUMN "y2s4_lectures",
DROP COLUMN "y2s4_practical",
DROP COLUMN "y3s5_credits",
DROP COLUMN "y3s5_laboratories",
DROP COLUMN "y3s5_lectures",
DROP COLUMN "y3s5_practical",
DROP COLUMN "y3s6_credits",
DROP COLUMN "y3s6_laboratories",
DROP COLUMN "y3s6_lectures",
DROP COLUMN "y3s6_practical",
DROP COLUMN "y4s7_credits",
DROP COLUMN "y4s7_laboratories",
DROP COLUMN "y4s7_lectures",
DROP COLUMN "y4s7_practical",
DROP COLUMN "y4s8_credits",
DROP COLUMN "y4s8_laboratories",
DROP COLUMN "y4s8_lectures",
DROP COLUMN "y4s8_practical",
ADD COLUMN     "y1s1Credits" TEXT,
ADD COLUMN     "y1s1Laboratories" TEXT,
ADD COLUMN     "y1s1Lectures" TEXT,
ADD COLUMN     "y1s1Practical" TEXT,
ADD COLUMN     "y1s2Credits" TEXT,
ADD COLUMN     "y1s2Laboratories" TEXT,
ADD COLUMN     "y1s2Lectures" TEXT,
ADD COLUMN     "y1s2Practical" TEXT,
ADD COLUMN     "y2s3Credits" TEXT,
ADD COLUMN     "y2s3Laboratories" TEXT,
ADD COLUMN     "y2s3Lectures" TEXT,
ADD COLUMN     "y2s3Practical" TEXT,
ADD COLUMN     "y2s4Credits" TEXT,
ADD COLUMN     "y2s4Laboratories" TEXT,
ADD COLUMN     "y2s4Lectures" TEXT,
ADD COLUMN     "y2s4Practical" TEXT,
ADD COLUMN     "y3s5Credits" TEXT,
ADD COLUMN     "y3s5Laboratories" TEXT,
ADD COLUMN     "y3s5Lectures" TEXT,
ADD COLUMN     "y3s5Practical" TEXT,
ADD COLUMN     "y3s6Credits" TEXT,
ADD COLUMN     "y3s6Laboratories" TEXT,
ADD COLUMN     "y3s6Lectures" TEXT,
ADD COLUMN     "y3s6Practical" TEXT,
ADD COLUMN     "y4s7Credits" TEXT,
ADD COLUMN     "y4s7Laboratories" TEXT,
ADD COLUMN     "y4s7Lectures" TEXT,
ADD COLUMN     "y4s7Practical" TEXT,
ADD COLUMN     "y4s8Credits" TEXT,
ADD COLUMN     "y4s8Laboratories" TEXT,
ADD COLUMN     "y4s8Lectures" TEXT,
ADD COLUMN     "y4s8Practical" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stavka" DOUBLE PRECISION NOT NULL;
