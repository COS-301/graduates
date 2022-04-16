import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogUser {
  @Field()
  Id!: string;

  @Field(() => [Blog])
  blogs!: Blog[];

  @Field(() => [Comment])
  comments!: Comment[];  
}
