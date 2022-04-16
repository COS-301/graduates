import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogComment {

//  // @PrimaryGeneratedColumn()
//   @Field(() => Int)  
//   id: number;

//   //@Column()  
  @Field()
content!: string;

//   //@Column()  
//   @Field(() => Date)  
//   date!: Date;

//  //linking comments to a blog entities
//  //@Column()
//  @Field(() => Int)
//  blogId: number;

//  //@ManyToOne(() => Blog, blog => blog.comments)
//  @Field(()=> Blog)
//  blog: Blog;

//  //linking comments to a User entity
//  //@Column()
//  @Field(() => Int)
//  UserId: number;

//  //@ManyToOne(() => User, user => user.comments)
//  @Field(()=> User)
//  user: User;

}