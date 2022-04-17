import { Field, ID, ObjectType } from '@nestjs/graphql';
import internal = require('stream');

@ObjectType()
export class ApiStudentExplore {
  @Field({ nullable: true })
  StudentName: string;

  @Field({ nullable: true })
  StudentBio: string;

  @Field(type => [String], { nullable: true })
  StudentEmail: string[];

  @Field({ nullable: true })
  StudentNumber: string;

  @Field({ nullable: true })
  StudentPic: string;

  @Field(type => [String], { nullable: true })
  StudentTags: string[];

  @Field({ nullable: true })
  StudentID: string;

  @Field({ nullable: true })
  StudentRel : number;

  @Field({ nullable: true })
  StudentLocation : string;

  @Field(type => [String], { nullable: true })
  StudentDegreeType : string[];

  @Field(type => [String], { nullable: true })
  StudentDegreeName : string[];

  @Field({ nullable: true })
  StudentEmpStatus : boolean;

  @Field({ nullable: true })
  StudentEmpOffer : boolean;

  @Field(type => [String], { nullable: true })
  Available: string[];


}
