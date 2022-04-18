import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Role } from "@prisma/client";
import { GetRolesQuery } from "../impl/get-roles.query";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"

@QueryHandler(GetRolesQuery)
export class GetRolesHandler implements IQueryHandler<GetRolesQuery>{
    constructor(private readonly repo: Adminauthorization) {}

    async execute(query: GetRolesQuery): Promise<Role[] | null> {
        const rolesP = await this.repo.findGeneralPermissions(query.id)
        const roles = []
        for (let index = 0; index < rolesP.length; index++) {
            roles.push(rolesP[index]) 
        }
        return roles;
    }
}
