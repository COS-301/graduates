import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Definition of Academic Record entity
 */
@ObjectType()
export class AcademicRecord {
    @Field({ nullable: true })
    fileAsString!: string;
}

@ObjectType()
export class Degree{
    @Field({ nullable: true })
    fileAsString!: string;
}