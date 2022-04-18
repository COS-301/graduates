/*
  Warnings:

  - Made the column `data` on table `notification` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "notification" ALTER COLUMN "data" SET NOT NULL;
