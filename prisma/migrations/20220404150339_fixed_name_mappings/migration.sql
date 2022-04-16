/*
  Warnings:

  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Story` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "FileCategory" ADD VALUE 'CV';
ALTER TYPE "FileCategory" ADD VALUE 'PROFILE_PHOTO';
ALTER TYPE "FileCategory" ADD VALUE 'VIDEO';

-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_user_id_from_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_user_id_to_fkey";

-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_user_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_company_id_fkey";

-- DropForeignKey
ALTER TABLE "blog_comment" DROP CONSTRAINT "blog_comment_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "blog_media" DROP CONSTRAINT "blog_media_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_story_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "story_tag" DROP CONSTRAINT "story_tag_story_id_fkey";

-- DropForeignKey
ALTER TABLE "user_email" DROP CONSTRAINT "user_email_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_location" DROP CONSTRAINT "user_location_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_permissions" DROP CONSTRAINT "user_permissions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_scouted" DROP CONSTRAINT "user_scouted_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_scouted" DROP CONSTRAINT "user_scouted_user_id_scout_fkey";

-- DropForeignKey
ALTER TABLE "user_social_media" DROP CONSTRAINT "user_social_media_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_student_profile_file" DROP CONSTRAINT "user_student_profile_file_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_tag" DROP CONSTRAINT "user_tag_user_id_fkey";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Story";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "password_salt" TEXT,
    "name" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "company_id" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "suspended" BOOLEAN NOT NULL,
    "validated" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "story" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media" TEXT,
    "data" TEXT,
    "date_posted" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "user_id_from" TEXT,
    "user_id_to" TEXT NOT NULL,
    "data" JSONB,
    "date" TIMESTAMP(3) NOT NULL,
    "seen" BOOLEAN NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_scout_fkey" FOREIGN KEY ("user_id_scout") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tag" ADD CONSTRAINT "user_tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_media" ADD CONSTRAINT "user_social_media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_email" ADD CONSTRAINT "user_email_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_student_profile_file" ADD CONSTRAINT "user_student_profile_file_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story" ADD CONSTRAINT "story_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_tag" ADD CONSTRAINT "story_tag_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_from_fkey" FOREIGN KEY ("user_id_from") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_to_fkey" FOREIGN KEY ("user_id_to") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_media" ADD CONSTRAINT "blog_media_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
