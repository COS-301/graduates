import { Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UserSocialMedia {
    @Field(type => ID)
    userID!: string;

    @Field()
    type: string;

    @Field()
    link: string;

}

@ObjectType()
export class UserEmail{
    @Field(type => ID)
    userID!: string;

    @Field()
    email: string;
}

@ObjectType()
export class UserNumber{
    @Field(type => ID)
    userID!: string;

    @Field()
    number: string;
}

@ObjectType()
export class UserLocation{
    @Field(type => ID)
    userID!: string;

    @Field()
    location: string;
}



@ObjectType()
export class ApiCompanyProfilePage{
    @Field(type => ID)
    id!: string;

    @Field()
    name?: string | null;

    @Field()
    company_office_location: UserLocation;

    @Field()
    company_filter: string | null;

    @Field()
    company_contact_details: UserNumber;

    @Field()
    company_email: UserEmail;

    @Field()
    company_bio: string | null;

    @Field()
    company_social_media: UserSocialMedia;


}
