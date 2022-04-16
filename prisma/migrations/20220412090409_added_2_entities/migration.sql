/*
  Warnings:

  - You are about to drop the `company_rep_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_rep_info" DROP CONSTRAINT "company_rep_info_repId_fkey";

-- DropTable
DROP TABLE "company_rep_info";

-- CreateTable
CREATE TABLE "user_contact_number" (
    "user_id" TEXT NOT NULL,
    "number" VARCHAR(10) NOT NULL,

    CONSTRAINT "user_contact_number_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_experience" (
    "user_id" TEXT NOT NULL,
    "experience" TEXT NOT NULL,

    CONSTRAINT "user_experience_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "user_contact_number" ADD CONSTRAINT "user_contact_number_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
