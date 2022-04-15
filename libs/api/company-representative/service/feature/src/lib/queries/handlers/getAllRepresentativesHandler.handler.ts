import { QueryHandler } from "@nestjs/cqrs";
import { IQueryHandler } from "@nestjs/cqrs";
import { GetAllRepresentatives } from "../impl/getAllRepresentatives.query";


@QueryHandler(GetAllRepresentatives)
export class GetAllRepresentativesHandler implements IQueryHandler<GetAllRepresentatives>
{

    //inject dataAccess here

    async execute(){
        return null; //for now
    }

}