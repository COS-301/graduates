/*
  Warnings:

  - You are about to drop the column `field1` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `field2` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[test1]` on the table `Test` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `test1` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'REPRESENTATIVE', 'ADMIN', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "permission_type" AS ENUM ('CREATE', 'EDIT', 'REMOVE', 'VIEW', 'ARCHIVE', 'SUSPEND', 'ALL');

-- CreateEnum
CREATE TYPE "permission_category" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'PROFILE', 'STORY', 'PERMISSIONS', 'ROLE', 'ALL');

-- CreateEnum
CREATE TYPE "permission_tenant" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'COUNT', 'VIEWERS', 'NONE', 'ALL');

-- CreateEnum
CREATE TYPE "social_media" AS ENUM ('TWITTER', 'INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'SNAPCHAT', 'GITHUB');

-- CreateEnum
CREATE TYPE "file_category" AS ENUM ('ACADEMIC_RECORD', 'DEGREE', 'MISC');

-- DropIndex
DROP INDEX "Test_field1_key";

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "field1",
DROP COLUMN "field2",
ADD COLUMN     "test1" TEXT NOT NULL,
ADD COLUMN     "test2" TEXT;

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
CREATE TABLE "user_scouted" (
    "user_id_scout" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" TIMESTAMP(3),

    CONSTRAINT "user_scouted_pkey" PRIMARY KEY ("user_id_scout")
);

-- CreateTable
CREATE TABLE "user_role" (
    "user_id" TEXT NOT NULL,
    "role" "role" NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id","role")
);

-- CreateTable
CREATE TABLE "user_permissions" (
    "user_id" TEXT NOT NULL,
    "permission_type" "permission_type" NOT NULL,
    "permission_category" "permission_category" NOT NULL,
    "permission_tenant" "permission_tenant" NOT NULL,

    CONSTRAINT "user_permissions_pkey" PRIMARY KEY ("user_id","permission_type","permission_category","permission_tenant")
);

-- CreateTable
CREATE TABLE "role_permissions" (
    "role" "role" NOT NULL,
    "permission_type" "permission_type" NOT NULL,
    "permission_category" "permission_category" NOT NULL,
    "permission_tenant" "permission_tenant" NOT NULL,

    CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role","permission_type","permission_category","permission_tenant")
);

-- CreateTable
CREATE TABLE "user_profile" (
    "user_id" TEXT NOT NULL,
    "profile_picture" TEXT,
    "bio" TEXT,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_tag" (
    "user_id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "user_tag_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_social_media" (
    "user_id" TEXT NOT NULL,
    "type" "social_media" NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "user_social_media_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_location" (
    "user_id" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "user_location_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_email" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_email_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_student_profile_file" (
    "file_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "file_category" "file_category",
    "file_extension" TEXT,

    CONSTRAINT "user_student_profile_file_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "story" (
    "story_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media" TEXT,
    "data" TEXT,
    "date_posted" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "story_pkey" PRIMARY KEY ("story_id")
);

-- CreateTable
CREATE TABLE "story_tag" (
    "story_id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "story_tag_pkey" PRIMARY KEY ("story_id","tag")
);

-- CreateTable
CREATE TABLE "story_report" (
    "story_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "story_report_pkey" PRIMARY KEY ("story_id","user_id")
);

-- CreateTable
CREATE TABLE "notification" (
    "notification_id" TEXT NOT NULL,
    "user_id_from" TEXT,
    "user_id_to" TEXT NOT NULL,
    "data" JSONB,
    "date" TIMESTAMP(3) NOT NULL,
    "seen" BOOLEAN NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "blog" (
    "blog_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "media" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("blog_id")
);

-- CreateTable
CREATE TABLE "blog_comment" (
    "comment_id" TEXT NOT NULL,
    "blog_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Test_test1_key" ON "Test"("test1");

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
ALTER TABLE "story_tag" ADD CONSTRAINT "story_tag_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("story_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "story"("story_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_from_fkey" FOREIGN KEY ("user_id_from") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_to_fkey" FOREIGN KEY ("user_id_to") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("blog_id") ON DELETE RESTRICT ON UPDATE CASCADE;
