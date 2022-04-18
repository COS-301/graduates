import { Field, ID, InputType, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UserSocialMedia {
    @Field(type => ID)
    userId!: string;

    @Field()
    type: string;

    @Field()
    link: string;

}

@ObjectType()
export class UserEmail{
    @Field(type => ID)
    userId!: string;

    @Field()
    email: string;
}

@ObjectType()
export class UserNumber{
    @Field(type => ID)
    userId!: string;

    @Field()
    number: string;
}

@ObjectType()
export class UserLocation{
    @Field(type => ID)
    userId!: string;

    @Field()
    location: string;
}

@ObjectType()
export class UserProfile{
    @Field(type => ID)
    userId!: string;
    
    @Field()
    bio: string
}

@ObjectType()
export class CompanyReps{
    @Field(type => ID)
    id!: string;

    @Field()
    name: string;

    @Field()
    companyId: string
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
    company_bio: UserProfile;

    @Field()
    company_social_media: UserSocialMedia;


}

@InputType()
export class UpdateBioInput{
    @Field(type => ID)
    id!: string

    @Field()
    bio: string

}
