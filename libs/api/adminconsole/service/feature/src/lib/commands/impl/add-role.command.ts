import { Prisma, User } from "@prisma/client";

export class AddRoleCommand {
    public readonly where: Prisma.UserWhereUniqueInput;
    public readonly user: Prisma.UserCreateNestedOneWithoutUserPermissionsInput;
    constructor(public readonly users: User, public readonly data: Prisma.UserRoleCreateInput) {
        this.where = {id: users.id}
        this.user.connect = this.where;
        data.user = this.user;
    }
}
