import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserPermissions } from "@prisma/client";
import { GetPermissionsQuery } from "../impl/get-permissions.query";

@QueryHandler(GetPermissionsQuery)
export class GetPermissionsHandler implements IQueryHandler<GetPermissionsQuery>{   
    constructor(private readonly repo: PrismaService) {}

    async execute(query: GetPermissionsQuery): Promise<UserPermissions[]| null> {
        const where = query.where;
        return await this.repo.userPermissions.findMany({where});
    }
}
