import { Prisma } from "@prisma/client";

export class DeleteRepresentative
{
    constructor(public readonly id:Prisma.UserWhereUniqueInput){}
}