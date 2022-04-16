-- DropForeignKey
ALTER TABLE "user_contact_number" DROP CONSTRAINT "user_contact_number_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_email" DROP CONSTRAINT "user_email_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_experience" DROP CONSTRAINT "user_experience_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_location" DROP CONSTRAINT "user_location_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_permissions" DROP CONSTRAINT "user_permissions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_scouted" DROP CONSTRAINT "user_scouted_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_scouted" DROP CONSTRAINT "user_scouted_user_id_scout_fkey";

-- DropForeignKey
ALTER TABLE "user_social_media" DROP CONSTRAINT "user_social_media_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_student_profile_file" DROP CONSTRAINT "user_student_profile_file_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_tag" DROP CONSTRAINT "user_tag_user_id_fkey";

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_scout_fkey" FOREIGN KEY ("user_id_scout") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_scouted" ADD CONSTRAINT "user_scouted_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tag" ADD CONSTRAINT "user_tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_social_media" ADD CONSTRAINT "user_social_media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_location" ADD CONSTRAINT "user_location_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_email" ADD CONSTRAINT "user_email_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_student_profile_file" ADD CONSTRAINT "user_student_profile_file_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_contact_number" ADD CONSTRAINT "user_contact_number_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
