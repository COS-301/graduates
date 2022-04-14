/*
  Warnings:

  - The primary key for the `user_tag` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "user_profile" ADD COLUMN     "employment_status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "open_to_offers" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "user_tag" DROP CONSTRAINT "user_tag_pkey",
ADD CONSTRAINT "user_tag_pkey" PRIMARY KEY ("user_id", "tag");

-- CreateTable
CREATE TABLE "user_degree" (
    "user_id" TEXT NOT NULL,
    "degree_type" TEXT NOT NULL,
    "degree_name" TEXT NOT NULL,

    CONSTRAINT "user_degree_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "user_degree" ADD CONSTRAINT "user_degree_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
