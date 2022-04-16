/*
  Warnings:

  - The primary key for the `user_social_media` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "user_social_media" DROP CONSTRAINT "user_social_media_pkey",
ADD CONSTRAINT "user_social_media_pkey" PRIMARY KEY ("user_id", "type");
