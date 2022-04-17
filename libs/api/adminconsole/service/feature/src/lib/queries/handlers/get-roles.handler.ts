import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserRole } from "@prisma/client";
import { GetRolesQuery } from "../impl/get-roles.query";

@QueryHandler(GetRolesQuery)
export class GetRolesHandler implements IQueryHandler<GetRolesQuery>{
    constructor(private readonly repo: PrismaService) {}

    async execute(query: GetRolesQuery): Promise<UserRole[] | null> {
        const where = query.where;
        return await this.repo.userRole.findMany({where})
    }
}
