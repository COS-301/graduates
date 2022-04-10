import {ID, Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class ApiAuthorization {
    

    @Field()
    userRole!: string;
  
    @Field((type) => [Boolean])
    permissions!: boolean[];

}