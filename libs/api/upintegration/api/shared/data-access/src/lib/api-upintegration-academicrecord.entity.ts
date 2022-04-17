import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FileCategory } from '@prisma/client';

/**
 * Definition of Academic Record entity
 */
@ObjectType()
export class AcademicRecord {
    /**
     * The users ID
     */
    @Field(() => ID)
    userId!: string;

    /**
     * The file category
     */
    @Field(()=> FileCategory)
    fileCategory!: FileCategory;

    /**
     * The file extension
     */
    @Field()
    fileExtension!: string;

    /**
     * The file Path
     */
    @Field({ nullable: true})
    filePath!: string;

    /**
     * The file as a string
     */
    @Field({ nullable: true})
    fileAsString!: string;
}