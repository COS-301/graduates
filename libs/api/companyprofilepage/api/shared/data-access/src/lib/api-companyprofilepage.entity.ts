import { Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class ApiCompanyProfilePage{
    @Field(type => ID)
    id!: string;

    @Field()
    name: string;

    @Field()
    logo: string;

    @Field()
    address: string;

    @Field()
    phoneNumber: string;

    @Field()
    emailAddress: string;

    @Field()
    websiteLink: string;

    @Field()
    companyBio: string;

    @Field()
    industryAndServices: string;



}