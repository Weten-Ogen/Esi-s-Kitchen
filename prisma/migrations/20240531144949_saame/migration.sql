/*
  Warnings:

  - You are about to drop the column `e0mailVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "e0mailVerified",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
