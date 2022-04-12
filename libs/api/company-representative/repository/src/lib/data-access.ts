import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import {Prisma}  from '@prisma/client';



@Injectable()
export class DataAccess extends PrismaClient implements OnModuleInit,OnModuleDestroy {

    constructor(){
        super()
    }

    public async onModuleDestroy() {
        await this.$disconnect() //disconnect from the prisma db
      }
    
    public async onModuleInit() {
        await this.$connect() //connect to schema db
    }

    async getAll()
    {
        return this.user.findMany();
    }

    async createRep(userInformation:Prisma.UserCreateInput)
    {
        return this.user.create({
            data:userInformation
        })
    }

    async getOne(id:Prisma.UserWhereUniqueInput)
    {
        return this.user.findUnique({
            where: id,
        });
    }

    async updateRep(data:Prisma.UserUpdateInput,where:Prisma.UserWhereUniqueInput)
    {
        return this.user.update({
            data,
            where
        });
    }

    async deleteRep(id:Prisma.UserWhereUniqueInput)
    {
        return this.user.delete({
            where: id,
        })
    }


    


    
}

