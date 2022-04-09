-- TODO: david roodt Confirm what is data type of user_profile->profilepicture
-- TODO: david roodt add Foreign Keys
-- Editor's Note: dob is in both User and user_student_profile. Seems redundent. Will clarify

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "password_salt" TEXT NOT NULL,
    "name" TEXT,
    "date_of_birth" TEXT NOT NULL,
    "comapany_id" SERIAL,
    "date_created" DATE,
    "suspended" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "user_profile" (
    "user_id" SERIAL NOT NULL,
    "profile_picture" TEXT,
    "bio" TEXT,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("user_id")
);

CREATE TABLE "user_tag" (
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "tag" TEXT NOT NULL PRIMARY KEY,
);

CREATE TABLE "user_social_media" (
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL PRIMARY KEY,
    "link" TEXT NOT NULL,
);

CREATE TABLE "user_email" (
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "contact_email" TEXT NOT NULL PRIMARY KEY,
);

CREATE TABLE "user_student_profile" (
    "user_id" SERIAL NOT NULL PRIMARY KEY,
    "profile_picture" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cellnumber" TEXT,
    "bio" TEXT,
    "notable_achievements" TEXT,
    "story" TEXT
);
-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");