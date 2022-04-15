import { Prisma } from "@prisma/client";

export class GetOneRepresentative{
    constructor(public id:Prisma.UserWhereUniqueInput){}
}