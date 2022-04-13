import { Prisma} from "@prisma/client";

/***
 * Holds the update object.
 * consists of:
 * updates: new Object to update
 * where: clause that says primary key?
 */

export class UpdateRepresentative
{
    constructor(
        public readonly updates:Prisma.UserUpdateInput,
        public readonly where:Prisma.UserWhereUniqueInput //this is the updateBody.dto I created
    ){}

}