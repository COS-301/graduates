/*
  Warnings:

  - You are about to drop the `user_cellnum` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_cellnum" DROP CONSTRAINT "user_cellnum_user_id_fkey";

-- DropTable
DROP TABLE "user_cellnum";
