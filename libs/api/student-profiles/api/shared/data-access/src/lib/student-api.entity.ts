import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Student{
  @Field()
  id: string

  @Field()
  firstName: string;

  @Field({nullable: true})
  lastName?: string;

  @Field(type => [Int])
  marks: number[];
}
