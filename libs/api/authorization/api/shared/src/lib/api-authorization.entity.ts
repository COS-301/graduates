import {ID, Field, ObjectType ,Args} from '@nestjs/graphql';
import { access } from 'fs';

@ObjectType()
export class ApiAuthorization {
    

    @Field()
    userRole!: string;
  
    @Field((type) => [Boolean])
    permissions!: boolean[];

}