import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PermissionType, User} from "@prisma/client";
import { GetUsersQuery } from "../impl/get-users.query";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    constructor(private readonly repo: PrismaService) {}

    async execute(query: GetUsersQuery): Promise<User[] | null> {
        let where = query.where;
        const userRole = await this.repo.userPermissions.findFirst({
          where
        })

        if(userRole == null)
            return null;
        else {
            if(userRole.permissionType == PermissionType.VIEW) {
                where = {userId: query.where.userId}
                return await this.repo.user.findMany({where});
            }
            else return null
        }
    }
}
