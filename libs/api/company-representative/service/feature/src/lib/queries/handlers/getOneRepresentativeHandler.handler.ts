import { IQueryHandler,QueryHandler } from "@nestjs/cqrs";
import { User } from "@prisma/client";
import { GetOneRepresentative } from "../impl/getOneRepresentative.query";
import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";

@QueryHandler(GetOneRepresentative)
export class GetOneRepresentativeHandler implements IQueryHandler<GetOneRepresentative>{

    constructor(private readonly dataAccess:CompanyRepresentativeRepository){}

    async execute(query: GetOneRepresentative): Promise<User|null> {
        return null;
    }

}