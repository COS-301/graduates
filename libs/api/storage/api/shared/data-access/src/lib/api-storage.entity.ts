import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FileCategory } from '@prisma/client';

@ObjectType()
export class ApiStorage {
  @Field(() => ID)
  userId!: string;
  @Field(()=> String)
  fileCategory!: String;
  @Field(() => String)
  fileExtension!: string;
  @Field({ nullable: true})
  filePath!: String;
}

