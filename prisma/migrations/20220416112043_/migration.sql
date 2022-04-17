/*
  Warnings:

  - Added the required column `user_id` to the `blog_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog_comment" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
