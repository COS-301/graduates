import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserPermissions } from "@prisma/client";
import { GetPermissionsQuery } from "../impl/get-permissions.query";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"

@QueryHandler(GetPermissionsQuery)
export class GetPermissionsHandler implements IQueryHandler<GetPermissionsQuery>{   
    constructor(private readonly repo: Adminauthorization) {}

    async execute(query: GetPermissionsQuery): Promise<UserPermissions[]| null> {
        return await this.repo.findUniquePermission(query.id);
    }
}
