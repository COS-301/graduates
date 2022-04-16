/*
  Warnings:

  - The primary key for the `user_degree` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "user_degree" DROP CONSTRAINT "user_degree_pkey",
ADD CONSTRAINT "user_degree_pkey" PRIMARY KEY ("user_id", "degree_name");
