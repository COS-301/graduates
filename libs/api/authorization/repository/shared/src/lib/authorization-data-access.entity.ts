import { Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class authorizationAdmin{
    @Field()
    askingId!: string;
    @Field({ nullable: true })
    targetId?: string;
    @Field()
    u_permission = new user_permissions();
    @Field()
    r_permission = new role_permission();

}

@ObjectType()
export class authorizationStudent{
    @Field()
    askingId!: string;
    @Field({ nullable: true })
    targetId?:string;
    @Field()
    role!:roletype;
    @Field()
    u_permission = new user_permissions();
    @Field()
    r_permission  = new role_permission();

}
@ObjectType()
export class authorizationCompany{
    @Field()
    askingId!: string;
    @Field({ nullable: true })
    targetId?:string;
    @Field()
    u_permission = new user_permissions();
    @Field()
    r_permission= new user_permissions();

}
@ObjectType()
export class user_permissions{
    @Field()
    permission_t!:PermissionType;
    @Field()
    permission_category!:PermissionCategory;
    @Field()
    permission_tenant?:PermissionTenant;

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

export enum roletype{
    USER = "USER",
    STUDENT = "STUDENT",
    COMPANY = "COMPANY",
    REPRESENTATIVE = "REPRESENTATIVE",
    ADMIN = "ADMIN",
    SUSPENDED = "SUSPENDED"
}
export enum PermissionType {
    CREATE = "CREATE",
    EDIT = "EDIT",
    REMOVE = "REMOVE",
    VIEW = "VIEW",
    ARCHIVE = "ARCHIVE",
    SUSPEND = "SUSPEND",
    ALL = "ALL"
  }
  
  // What the permission applies to
  export enum PermissionCategory {
    USER = "USER",
    STUDENT = "STUDENT",
    COMPANY = "COMPANY",
    PROFILE = "PROFILE",
    STORY = "STORY",
    PERMISSIONS = "PERMISSIONS",
    ROLE = "ROLE",
    ALL = "ALL"
  }
  
  // What the permission is for
  export enum PermissionTenant {
    USER = "USER",
    STUDENT = "STUDENT",
    COMPANY= "COMPANY",
    COUNT = "COUNT",
    VIEWERS = "VIEWERS",
    NONE = "NONE",
    ALL = "ALL"
  }

