import {ID, Field, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class ApiAuthorization {
    

    @Field()
    userRole!: string;

    @Field()
    userId! : string;
  
    @Field((type) => Boolean)
    accessPermission!: boolean;

    @Field((type) => Boolean)
    editPermission! : boolean;

    @Field((type) => Boolean)
    deletePermission! : boolean;


}