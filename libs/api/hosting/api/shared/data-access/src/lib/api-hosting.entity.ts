import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiHosting {
  @Field()
  name!: string;

  @Field()
  status!: string;
}