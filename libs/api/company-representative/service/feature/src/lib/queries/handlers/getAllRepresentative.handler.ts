import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllRepresentatives } from "../impl/getAllRepresentatives.query";

@QueryHandler(GetAllRepresentatives)
export class GetAllRepresentativesHandler implements IQueryHandler<GetAllRepresentatives>
{

    constructor(private repository:CompanyRepresentativeRepository){}

    async execute(query: GetAllRepresentatives): Promise<any> {
        return this.repository.getAllRepresentativeUsers();
    }
}