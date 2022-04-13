import { Field, ID, ObjectType } from '@nestjs/graphql';
import internal = require('stream');

@ObjectType()
export class ApiStudentExplore {
  @Field({ nullable: true })
  StudentName: string;

  @Field({ nullable: true })
  StudentBio: string;

  @Field({ nullable: true })
  StudentPic: string;

  @Field({ nullable: true })
  StudentTags: string;

  @Field({ nullable: true })
  StudentID: string;

  @Field({ nullable: true })
  StudentRel : number;

  @Field({ nullable: true })
  StudentLocation : string;
}
