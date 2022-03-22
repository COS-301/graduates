import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ApiUpIntegration{
    @Field()
    stub!: string;
}