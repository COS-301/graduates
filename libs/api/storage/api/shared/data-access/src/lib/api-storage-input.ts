
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ApiStorageInput {
  @Field(() => ID)
  userId!: String;
  @Field(()=> String)
  fileCategory!: String;
  @Field(() => String)
  fileExtension!: String;
  @Field(()=>String)
  filePath!: String;
}