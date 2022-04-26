import { Field, ObjectType} from "@nestjs/graphql";
import { PermissionCategory, PermissionTenant, PermissionType, Role } from "@prisma/client";


@ObjectType()
export class user_permissions{
    @Field()
    userId!: string;
    @Field()
    permissionType!:PermissionType;
    @Field()
    permissionCategory!:PermissionCategory;
    @Field()
    permissionTenant!:PermissionTenant;
}

@ObjectType()
export class User_role{
    @Field()
    userId!: string;
    @Field()
    role!:Role;
}

@ObjectType()
export class role_permissions{
    @Field()
    role!: Role;
    @Field()
    permissionType!:PermissionType;
    @Field()
    permissionCategory!:PermissionCategory;
    @Field()
    permissionTenant!:PermissionTenant;
}

@ObjectType()
export class role_permission{
    @Field()
    permission_t!:PermissionType;
    @Field()
    permission_category!:PermissionCategory;
    @Field()
    permission_tenant?:PermissionTenant;

}


