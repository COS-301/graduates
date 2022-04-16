import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs";
import { GetAllRepresentatives } from "../impl/getAllRepresentatives.query";
import { CompanyRepresentativeRepository } from "@graduates/api/company-representative/repository/data-access";

@QueryHandler(GetAllRepresentatives)
export class GetAllRepresentativesHandler implements IQueryHandler<GetAllRepresentatives>
{

    constructor(private readonly dataAccess:CompanyRepresentativeRepository){}

    async execute(){
        return null;;
    }

}