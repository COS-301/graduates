import { Field, ID, ObjectType} from "@nestjs/graphql";
import { SocialMedia, User, UserContactNumber, UserEmail, UserLocation, UserSocialMedia } from "@prisma/client";


@ObjectType()
export class ApiCompanyProfilePage{
    @Field(type => ID)
    company_id!: string;

    @Field()
    company_name: string;

    @Field()
    company_logo: string;

    @Field()
    company_office_location: UserLocation[];

    @Field()
    company_filter: string;

    @Field()
    company_contact_details: UserContactNumber;

    @Field()
    company_email: UserEmail[];

    @Field()
    company_bio: string;

    @Field()
    company_social_media: UserSocialMedia[] ;


}
