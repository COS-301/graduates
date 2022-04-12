import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiStudentExplore {
  @Field()
  StudentName: string;

  @Field()
  StudentBio: string;

  @Field()
  StudentPic: string;

  @Field()
  StudentTags: string;
}
