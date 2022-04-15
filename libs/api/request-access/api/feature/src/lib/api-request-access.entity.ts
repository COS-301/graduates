import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiRequestAccessEntity {
    @Field(type => ID)
    userID!: string;

    @Field(type => ID)
    companyID!: string;

    @Field()
    item!: string; // CV, Transcript, Academic, Certificates, Capstone // note some of the names have been shortand and the full names are below
                  // CV, Transcript, Academic Record, Certificates, Capstone Project
}