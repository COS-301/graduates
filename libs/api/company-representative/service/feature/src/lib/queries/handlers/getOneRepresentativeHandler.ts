import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetOneRepresentativeQuery } from "../impl/getOneRepresentative.query";
import { DataAccess } from "@graduates/api/company-representative/repository";
import { User } from "@prisma/client";
import { Prisma } from "@prisma/client";

@QueryHandler(GetOneRepresentativeQuery)
export class GetOneRepresentativeHanlder implements IQueryHandler<GetOneRepresentativeQuery> {

    constructor(private readonly dataAccess:DataAccess){}

    async execute(id:Prisma.UserWhereUniqueInput): Promise<User|null> {
        return this.dataAccess.getOne(id);
    }
}