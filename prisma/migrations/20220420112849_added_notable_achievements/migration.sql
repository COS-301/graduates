-- CreateTable
CREATE TABLE "user_not_achieve" (
    "user_id" TEXT NOT NULL,
    "Achievments" TEXT NOT NULL,

    CONSTRAINT "user_not_achieve_pkey" PRIMARY KEY ("user_id","Achievments")
);

-- AddForeignKey
ALTER TABLE "user_not_achieve" ADD CONSTRAINT "user_not_achieve_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
