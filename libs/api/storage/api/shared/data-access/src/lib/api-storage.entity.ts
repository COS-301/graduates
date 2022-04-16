import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FileCategory } from '@prisma/client';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  userId!: string;
  @Field(()=> FileCategory)
  fileCategory!: FileCategory;
  @Field()
  fileExtension!: string;
  @Field({ nullable: true})
  filePath!: string;
  @Field({ nullable: true})
  fileAsString!: string;
}
