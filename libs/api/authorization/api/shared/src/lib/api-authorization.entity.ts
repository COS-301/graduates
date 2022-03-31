import {ID, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiAuthorization {
    
    @Field((type) => ID)
    id!: string;

    @Field()
    permissionType!: string;

    @Field()
    userName!: string;

    @Field()
    userType!: string;

    @Field()
    isPermittedTo!: boolean;

}