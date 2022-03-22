import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Short {
  @Field(() => Int)
  id: number = 0;

  @Field()
  email: string = '';

  @Field()
  name: string = '';
}
