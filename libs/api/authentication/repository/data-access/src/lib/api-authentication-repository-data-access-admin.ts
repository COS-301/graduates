//Following handy tutorial from : https://www.sitepoint.com/using-redis-node-js/

//add where you wish to use the code
import {PrismaClient} from '@prisma/client';

export class AuthenticationRepository
{
    prisma = new PrismaClient();

    async setToken(email : string, token : string, token_type : number, token_expiration : number)
    {
        const id = await this.getId(email);
        await this.prisma.userToken.create({
            data:
            {
                userId : id,
                userToken: token,
                userTokenType: token_type,
                userTokenExpiration: token_expiration
            }
        })
    }

    async getToken(email : string)
    {
        const id = await this.getId(email);        
        return await this.prisma.userToken.findFirst({
            where:
            {
                userId: id
            },
            select:
            {
                userToken: true
            }
        });
    }

    async setTokenExpiration(email : string, time : number)
    {
        const id = await this.getId(email);
        await this.prisma.userToken.update({
            where:
            {
                userId:id
            },
            data:
            {
                userTokenExpiration: time
            }
        })
        
        return email;
    }

    async getTokenExpiration(email : string)
    {
        const id = await this.getId(email);
        return await this.prisma.userToken.findFirst({
            where:{
                userId:id
            },
            select:
            {
                userTokenExpiration: true
            }
        })
    }

    async setTokenType(email : string, token_type : number)
    {
        const id = await this.getId(email);
        await this.prisma.userToken.update({
            where:
            {
                userId : id
            },
            data:
            {
                userTokenExpiration: token_type
            }
        })
    }

    async getTokenType(email : string)
    {
        const id = await this.getId(email);
        await this.prisma.userToken.findFirst({
            where:
            {
                userId: id
            },
            select:
            {
                userTokenType: true
            }
        })
    }

    async getId(email: string)
    {
        const id = await this.prisma.user.findFirst({
            where:
            {
                email: email
            }
        });

        return id.email;
    }
}

