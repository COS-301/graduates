/*
  Warnings:

  - Added the required column `student_number` to the `user_profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_profile" ADD COLUMN     "student_number" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "user_cellnum" (
    "user_id" TEXT NOT NULL,
    "cellnum" TEXT NOT NULL,

    CONSTRAINT "user_cellnum_pkey" PRIMARY KEY ("user_id","cellnum")
);

-- AddForeignKey
ALTER TABLE "user_cellnum" ADD CONSTRAINT "user_cellnum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
