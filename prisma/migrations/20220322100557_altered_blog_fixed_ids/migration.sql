/*
  Warnings:

  - The primary key for the `blog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `blog_id` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `media` on the `blog` table. All the data in the column will be lost.
  - The primary key for the `notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `notification_id` on the `notification` table. All the data in the column will be lost.
  - The primary key for the `story` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `story_id` on the `story` table. All the data in the column will be lost.
  - The required column `id` was added to the `blog` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `notification` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `story` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "blog_comment" DROP CONSTRAINT "blog_comment_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_story_id_fkey";

-- DropForeignKey
ALTER TABLE "story_tag" DROP CONSTRAINT "story_tag_story_id_fkey";

-- AlterTable
ALTER TABLE "blog" DROP CONSTRAINT "blog_pkey",
DROP COLUMN "blog_id",
DROP COLUMN "media",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "blog_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "notification" DROP CONSTRAINT "notification_pkey",
DROP COLUMN "notification_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "notification_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "story" DROP CONSTRAINT "story_pkey",
DROP COLUMN "story_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "story_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "blog_media" (
    "blog_id" TEXT NOT NULL,
    "media" TEXT NOT NULL,

    CONSTRAINT "blog_media_pkey" PRIMARY KEY ("blog_id","media")
);

-- AddForeignKey
ALTER TABLE "story_tag" ADD CONSTRAINT "story_tag_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_media" ADD CONSTRAINT "blog_media_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
