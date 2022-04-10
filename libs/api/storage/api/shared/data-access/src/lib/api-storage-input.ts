import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ApiStorageInput {
    @Field(() => ID)
    userId!: string;
    @Field(()=> String)
    fileCategory!: String;
    @Field(() => String)
    fileExtension!: string;
    @Field({nullable :true})
    filePath!: String;

}
 