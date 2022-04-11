/*
  Warnings:

  - You are about to drop the `story` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `story_report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `story_tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "story" DROP CONSTRAINT "story_user_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_story_id_fkey";

-- DropForeignKey
ALTER TABLE "story_report" DROP CONSTRAINT "story_report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "story_tag" DROP CONSTRAINT "story_tag_story_id_fkey";

-- DropTable
DROP TABLE "story";

-- DropTable
DROP TABLE "story_report";

-- DropTable
DROP TABLE "story_tag";

-- CreateTable
CREATE TABLE "short" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "media" TEXT,
    "data" TEXT,
    "date_posted" TIMESTAMP(3) NOT NULL,
    "archived" BOOLEAN NOT NULL,

    CONSTRAINT "short_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "short_tag" (
    "short_id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "short_tag_pkey" PRIMARY KEY ("short_id","tag")
);

-- CreateTable
CREATE TABLE "short_report" (
    "short_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "short_report_pkey" PRIMARY KEY ("short_id","user_id")
);

-- AddForeignKey
ALTER TABLE "short" ADD CONSTRAINT "short_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "short_tag" ADD CONSTRAINT "short_tag_short_id_fkey" FOREIGN KEY ("short_id") REFERENCES "short"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "short_report" ADD CONSTRAINT "short_report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "short_report" ADD CONSTRAINT "short_report_short_id_fkey" FOREIGN KEY ("short_id") REFERENCES "short"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
