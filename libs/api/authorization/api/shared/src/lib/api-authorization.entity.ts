import {ID, Field, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class ApiAuthorization {
    

    @Field()
    userRole!: string;

    @Field()
    companyId! : string;
  
    @Field((type) => Boolean)
    accessPermission!: boolean;

    @Field((type) => Boolean)
    editPermission! : boolean;

    @Field((type) => Boolean)
    deletePermission! : boolean;


}