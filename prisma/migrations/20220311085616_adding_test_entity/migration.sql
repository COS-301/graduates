-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "field1" TEXT NOT NULL,
    "field2" TEXT,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_field1_key" ON "Test"("field1");
