import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { BlogComment } from './api-blog-comment-entity.entity';
import { BlogMedia } from './api-blog-media-entity.entity';
import { ID } from '@nestjs/graphql';

/**
 * Definition of the Blog entity as object type
 */
@ObjectType()
 export class Blog {

//   //linking blog to user entities
//   @Column()
//   @Field(() => Int)
//   userId: number;

//   @ManyToOne(() => User, user => user.blogs)
//   @Field(()=> User)
//   user: User;

//     //linking blog to comments
//     @OneToMany(()=> Comment, comment => comment.blog)
//     @Field(() => [Comment], {nullable: true})
//     comments?: Comment[];

//   //linking blog to medias
//   @OneToMany(()=> Media, media => media.blog)
//   @Field(() => [Media], {nullable: true})
//   medias?: Media[];  
}