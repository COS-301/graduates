-- CreateEnum
CREATE TYPE "Item" AS ENUM ('ACADEMIC_RECORD', 'CV', 'TRANSCRIPT', 'CERTIFICATE', 'CAPSTONE_PROJECT');

-- CreateTable
CREATE TABLE "Requested" (
    "RequestId" TEXT NOT NULL,
    "StudId" TEXT NOT NULL,
    "CompId" TEXT NOT NULL,
    "ItemId" "Item" NOT NULL,
    "Accepted" BOOLEAN NOT NULL,

    CONSTRAINT "Requested_pkey" PRIMARY KEY ("RequestId")
);
