import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs";
import { GetAllRepresentatives } from "../impl/getAllRepresentatives.query";
import { DataAccess } from "@graduates/api/company-representative/repository";

@QueryHandler(GetAllRepresentatives)
export class GetAllRepresentativesHandler implements IQueryHandler<GetAllRepresentatives>{

    constructor(private readonly dataAccess:DataAccess){}

    async execute(){
        return this.dataAccess.getAll();
    }
}