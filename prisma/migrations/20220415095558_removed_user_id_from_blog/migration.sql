/*
  Warnings:

  - You are about to drop the column `user_id` on the `blog_comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "blog_comment" DROP CONSTRAINT "blog_comment_user_id_fkey";

-- AlterTable
ALTER TABLE "blog_comment" DROP COLUMN "user_id";
