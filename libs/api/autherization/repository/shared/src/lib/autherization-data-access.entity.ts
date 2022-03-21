import { Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class autherizationAdmin{
    @Field()
    askingId!: string;
    @Field()
    targetId =  '';
    @Field()
    u_permission!: user_permissions[];
    @Field()
    r_permission! :role_permission[];

}

@ObjectType()
export class autherizationStudent{
    @Field()
    askingId!: string;
    @Field()
    targetId =  '';
    @Field()
    u_permission!: user_permissions[];
    @Field()
    r_permission! :role_permission[];

}
@ObjectType()
export class autherizationCompany{
    @Field()
    askingId!: string;
    @Field()
    targetId =  '';
    @Field()
    u_permission!: user_permissions[];
    @Field()
    r_permission! :role_permission[];

}
@ObjectType()
export class user_permissions{
    @Field()
    permission_type!: string;
    @Field()
    permission_category!: string;
    @Field()
    permission_tenant = "ALL";

}

@ObjectType()
export class role_permission{
    @Field()
    permission_type!: string;
    @Field()
    permission_category!: string;
    @Field()
    permission_tenant = "ALL";

}

