/*
  Warnings:

  - Added the required column `forUser` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "forUser" INTEGER NOT NULL;
