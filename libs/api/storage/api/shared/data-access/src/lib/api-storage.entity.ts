import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  userId!: string;
  @Field()
  fileCategory!: string;
  @Field()
  fileExtension!: string;
  @Field()
  filePath!: string;
}
