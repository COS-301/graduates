import {ID, Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class ApiPermissions {
        @Field(type => Boolean,{nullable:true})
        accessPermission!: boolean;

        @Field(type => Boolean,{nullable : true})
        editPermission! : boolean;

        @Field(type => Boolean,{nullable: true})
        deletePermission! : boolean;
}