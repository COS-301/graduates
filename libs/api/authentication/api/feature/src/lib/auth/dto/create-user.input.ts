import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: number
     
  @Field()
  name: string;

  @Field()
  password: string;
}
