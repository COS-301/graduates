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
    userID!: string;

    /**
     * The student number
     */
     @Field()
     studentNumber!: string;

    /**
     * Name of student
     */
    @Field({ nullable: true })
    name!: string;

    /**
     * Surname of student
     */
    @Field({ nullable: true })
    surname!: string;

    /**
     * Course of student
     */
    @Field({ nullable: true })
    course!: string;

    /**
     * Contact number of student
     */
    @Field({ nullable: true })
    contactNumber!: string;

    /**
     * Email of student
     */
    @Field({ nullable: true })
    email!: string;

}