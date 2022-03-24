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
    role!:string;
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
    permission_t!:string;
    @Field()
    permission_category!:string;
    @Field()
    permission_tenant = "NONE";

}

@ObjectType()
export class role_permission{
    @Field()
    permission_t!:string;
    @Field()
    permission_category!:string;
    @Field()
    permission_tenant = "NONE";

}

