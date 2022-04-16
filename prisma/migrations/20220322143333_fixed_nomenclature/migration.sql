/*
  Warnings:

  - The primary key for the `blog_comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `comment_id` on the `blog_comment` table. All the data in the column will be lost.
  - The primary key for the `role_permissions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_permissions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `file_category` column on the `user_student_profile_file` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `story` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `blog_comment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Changed the type of `role` on the `role_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_type` on the `role_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_category` on the `role_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_tenant` on the `role_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_type` on the `user_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_category` on the `user_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permission_tenant` on the `user_permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `user_role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `user_social_media` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'REPRESENTATIVE', 'ADMIN', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "PermissionType" AS ENUM ('CREATE', 'EDIT', 'REMOVE', 'VIEW', 'ARCHIVE', 'SUSPEND', 'ALL');

-- CreateEnum
CREATE TYPE "PermissionCategory" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'PROFILE', 'STORY', 'PERMISSIONS', 'ROLE', 'ALL');

-- CreateEnum
CREATE TYPE "PermissionTenant" AS ENUM ('USER', 'STUDENT', 'COMPANY', 'COUNT', 'VIEWERS', 'NONE', 'ALL');

-- CreateEnum
CREATE TYPE "SocialMedia" AS ENUM ('TWITTER', 'INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'SNAPCHAT', 'GITHUB');

-- CreateEnum
CREATE TYPE "FileCategory" AS ENUM ('ACADEMIC_RECORD', 'DEGREE', 'MISC');

-- DropForeignKey
ALTER TABLE "blog" DROP CONSTRAINT "blog_user_id_fkey";

-- DropForeignKey
ALTER TABLE "blog_comment" DROP CONSTRAINT "blog_comment_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "blog_media" DROP CONSTRAINT "blog_media_blog_id_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_user_id_from_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_user_id_to_fkey";

-- DropForeignKey
ALTER TABLE "story" DROP CONSTRAINT "story_user_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_story_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "story_tag" DROP CONSTRAINT "story_tag_story_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_company_id_fkey";

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

-- AlterTable
ALTER TABLE "blog_comment" DROP CONSTRAINT "blog_comment_pkey",
DROP COLUMN "comment_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "blog_comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "role_permissions" DROP CONSTRAINT "role_permissions_pkey",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
DROP COLUMN "permission_type",
ADD COLUMN     "permission_type" "PermissionType" NOT NULL,
DROP COLUMN "permission_category",
ADD COLUMN     "permission_category" "PermissionCategory" NOT NULL,
DROP COLUMN "permission_tenant",
ADD COLUMN     "permission_tenant" "PermissionTenant" NOT NULL,
ADD CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role", "permission_type", "permission_category", "permission_tenant");

-- AlterTable
ALTER TABLE "user_permissions" DROP CONSTRAINT "user_permissions_pkey",
DROP COLUMN "permission_type",
ADD COLUMN     "permission_type" "PermissionType" NOT NULL,
DROP COLUMN "permission_category",
ADD COLUMN     "permission_category" "PermissionCategory" NOT NULL,
DROP COLUMN "permission_tenant",
ADD COLUMN     "permission_tenant" "PermissionTenant" NOT NULL,
ADD CONSTRAINT "user_permissions_pkey" PRIMARY KEY ("user_id", "permission_type", "permission_category", "permission_tenant");

-- AlterTable
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_pkey",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
ADD CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_id", "role");

-- AlterTable
ALTER TABLE "user_social_media" DROP COLUMN "type",
ADD COLUMN     "type" "SocialMedia" NOT NULL;

-- AlterTable
ALTER TABLE "user_student_profile_file" DROP COLUMN "file_category",
ADD COLUMN     "file_category" "FileCategory";

-- DropTable
DROP TABLE "blog";

-- DropTable
DROP TABLE "notification";

-- DropTable
DROP TABLE "story";

-- DropTable
DROP TABLE "user";

-- DropEnum
DROP TYPE "file_category";

-- DropEnum
DROP TYPE "permission_category";

-- DropEnum
DROP TYPE "permission_tenant";

-- DropEnum
DROP TYPE "permission_type";

-- DropEnum
DROP TYPE "role";

-- DropEnum
DROP TYPE "social_media";

-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Story" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media" TEXT,
    "data" TEXT,
    "date_posted" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "Story_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "user_id_from" TEXT,
    "user_id_to" TEXT NOT NULL,
    "data" JSONB,
    "date" TIMESTAMP(3) NOT NULL,
    "seen" BOOLEAN NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_scout_fkey" FOREIGN KEY ("user_id_scout") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tag" ADD CONSTRAINT "user_tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_media" ADD CONSTRAINT "user_social_media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_email" ADD CONSTRAINT "user_email_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_student_profile_file" ADD CONSTRAINT "user_student_profile_file_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_tag" ADD CONSTRAINT "story_tag_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_report" ADD CONSTRAINT "story_report_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_from_fkey" FOREIGN KEY ("user_id_from") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_to_fkey" FOREIGN KEY ("user_id_to") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_comment" ADD CONSTRAINT "blog_comment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_media" ADD CONSTRAINT "blog_media_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
