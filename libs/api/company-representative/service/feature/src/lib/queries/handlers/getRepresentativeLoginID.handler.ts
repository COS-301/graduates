import { IQueryHandler,QueryHandler } from "@nestjs/cqrs";
import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";
import { GetCompanyRepresentativeLoginQuery } from "../impl/getRepresentativeLoginID.query";

@QueryHandler(GetCompanyRepresentativeLoginQuery)
export class GetRepresentativeLoginHandler implements IQueryHandler<GetCompanyRepresentativeLoginQuery>{

    constructor(private readonly repository: CompanyRepresentativeRepository){}

    async execute(query: GetCompanyRepresentativeLoginQuery) {
        return this.repository.login(query.email, query.password);
    }

}