import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiAccessStatusEntity {
    @Field()
    item!: string; // CV, Transcript, Academic Record, Certificates, Capstone Project

    @Field()
    accessStatus: string; // download: access granted, private: access denied, pending: not reviewed yet
}