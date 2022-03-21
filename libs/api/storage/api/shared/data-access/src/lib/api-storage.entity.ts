import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class ApiStorage{
    @Field()
    id!: string;
    @Field()
    CV: boolean = false;
    @Field()
    Transcript: boolean = false;
    @Field()
    AcademicRecord: boolean = false;
    @Field()
    Certificate: boolean = false;
    @Field()
    LetterOfRecommendation: boolean = false;

    



}