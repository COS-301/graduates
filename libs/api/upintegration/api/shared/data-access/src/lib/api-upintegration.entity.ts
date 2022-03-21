import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class ApiUpIntegration{
    @Field()
    stub!: string;
}