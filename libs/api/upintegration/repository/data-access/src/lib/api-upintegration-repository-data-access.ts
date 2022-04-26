import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class UpIntegrationRepository 
{
    constructor(
        private prisma : PrismaService
    ){}

    async get_UserID(studentnum : string): Promise<string>{
        const item = await this.prisma.userProfile.findFirst({
            where: {
                studentNumber: studentnum 
            },
            select: {
                userId: true,
            }
        });
        if(item){
            return item.userId
        }
        return "User was not found";
    }

    async get_name(userid : string): Promise<string | null>{
        const item = await this.prisma.user.findFirst({
            where: {
                id: userid 
            },
            select:{
                name: true
            }
        });
        if(item){
            return item.name
        }
        return null;
    }

    async get_email(userid : string): Promise<string | null>{        
        const item = await this.prisma.userEmail.findFirst({
            where: {
                userId: userid
            },
            select: {
                email : true
            }
        });
        if(item){
            return item.email
        }
        return null;
    }

    async get_contact(userid : string): Promise<string | null>{        
        const item = await this.prisma.userContactNumber.findFirst({
            where: {
                userId: userid
            },
            select: {
                number : true
            }
        });
        if(item){
            return item.number
        }
        return null;
    }
 
    async get_course(userid : string): Promise<string | null>{     
        const item = await this.prisma.userDegree.findFirst({
            where: {
                userID: userid
            },
            select: {
                degreeName : true
            }
        });
        if(item){
            return item.degreeName
        }
        return null;
    }

}