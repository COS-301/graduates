import { IQueryHandler,QueryHandler } from "@nestjs/cqrs";
import { User } from "@prisma/client";
import { GetOneRepresentative } from "../impl/getOneRepresentative.query";

@QueryHandler(GetOneRepresentative)
export class GetOneRepresentativeHandler implements IQueryHandler<GetOneRepresentative>{

    //data access injection here

    async execute(query: GetOneRepresentative): Promise<User|null> {
        return null; //access to the database
    }

}