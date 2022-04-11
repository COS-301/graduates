
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ApiStorageInput {
  @Field(() => ID)
  userId!: string;
  @Field()
  fileCategory!: string;
  @Field()
  fileExtension!: string;
  @Field()
  filePath!: string;
}
