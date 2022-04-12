import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FileCategory } from '@prisma/client';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  userId!: string;
  @Field()
  fileCategory!: FileCategory;
  @Field()
  fileExtension!: string;
  @Field()
  filePath!: string;
  @Field()
  fileAsString!: string;
  @Field()
  fileNameOrHash!: string;
}
