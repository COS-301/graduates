-- CreateTable
CREATE TABLE "company_rep_info" (
    "repId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "about_me" TEXT NOT NULL,
    "experiences" TEXT[],
    "company_name" TEXT NOT NULL,
    "lcoation" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "website_link" TEXT NOT NULL,
    "linked_in" TEXT NOT NULL,
    "git_hub_link" TEXT NOT NULL,
    "contact_number" VARCHAR(10) NOT NULL,

    CONSTRAINT "company_rep_info_pkey" PRIMARY KEY ("repId")
);

-- AddForeignKey
ALTER TABLE "company_rep_info" ADD CONSTRAINT "company_rep_info_repId_fkey" FOREIGN KEY ("repId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
