import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: number
     
  @Field()
  username: string;

  @Field()
  password: string;
}
