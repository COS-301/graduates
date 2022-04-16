-- CreateTable
CREATE TABLE "user_token" (
    "user_id" TEXT NOT NULL,
    "user_token" TEXT NOT NULL,
    "user_token_type" INTEGER NOT NULL,
    "user_token_expiration" INTEGER NOT NULL,

    CONSTRAINT "user_token_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "user_token" ADD CONSTRAINT "user_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
