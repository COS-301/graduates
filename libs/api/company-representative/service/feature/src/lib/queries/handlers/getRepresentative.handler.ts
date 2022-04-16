import { IQueryHandler,QueryHandler } from "@nestjs/cqrs";
import { GetCompanyRepresentativeQuery } from "../impl/getRepresentative.query";
import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";

@QueryHandler(GetCompanyRepresentativeQuery)
export class GetOneRepresentativeHandler implements IQueryHandler<GetCompanyRepresentativeQuery>{

    constructor(private readonly repository: CompanyRepresentativeRepository){}

    async execute(query: GetCompanyRepresentativeQuery) {
        const {id} = query;
        return this.repository.getRepresentativeUser(id);
    }

}