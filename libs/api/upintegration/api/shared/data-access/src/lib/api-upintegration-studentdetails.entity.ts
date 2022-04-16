import { Field, ObjectType } from "@nestjs/graphql";

/**
 * Definition Student Details Entity
 */
@ObjectType()
export class StudentDetails{
    /**
     * Student number of student
     */
    @Field()
    studentNumber!: string;

    /**
     * Name of student
     */
    @Field()
    name!: string;

    /**
     * Surname of student
     */
    @Field()
    surname!: string;

    /**
     * Course of student
     */
    @Field()
    course!: string;

    /**
     * Contact number of student
     */
    @Field()
    contactNumber!: string

    /**
     * Academic Record of student
     */
     @Field()
     record!: string;

    /**
     * Degree of student
     */
     @Field()
     degree!: string;

}