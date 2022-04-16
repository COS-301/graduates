import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Blog } from './api-blog-entity.entity';

@ObjectType()
export class BlogMedia {
  @PrimaryGeneratedColumn()
  @Field(() => Int)  
  id: number;

  @Column()  
  @Field()
  media!: string;

    //linking blog to user entities
    @Column()
    @Field(() => Int)
    blogId: number;
  
    @ManyToOne(() => Blog, blog => blog.medias)
    @Field(()=> Blog)
    blog: Blog;

}
