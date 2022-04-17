/*
  Warnings:

  - The primary key for the `user_email` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "user_email" DROP CONSTRAINT "user_email_pkey",
ADD CONSTRAINT "user_email_pkey" PRIMARY KEY ("user_id", "email");
