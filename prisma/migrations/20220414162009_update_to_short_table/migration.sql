/*
  Warnings:

  - You are about to drop the column `data` on the `short` table. All the data in the column will be lost.
  - You are about to drop the column `media` on the `short` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `blog_comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog_comment" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "short" DROP COLUMN "data",
DROP COLUMN "media",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "thumbnail" TEXT;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
