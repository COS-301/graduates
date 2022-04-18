/*
  Warnings:

  - The values [CERTIFICATE] on the enum `Item` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Item_new" AS ENUM ('ACADEMIC_RECORD', 'CV', 'TRANSCRIPT', 'CERTIFICATES', 'CAPSTONE_PROJECT');
ALTER TABLE "Requested" ALTER COLUMN "ItemId" TYPE "Item_new" USING ("ItemId"::text::"Item_new");
ALTER TYPE "Item" RENAME TO "Item_old";
ALTER TYPE "Item_new" RENAME TO "Item";
DROP TYPE "Item_old";
COMMIT;
