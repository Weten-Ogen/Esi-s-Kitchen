/*
  Warnings:

  - You are about to drop the column `package` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `packages` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "package",
ADD COLUMN     "packages" TEXT NOT NULL;
