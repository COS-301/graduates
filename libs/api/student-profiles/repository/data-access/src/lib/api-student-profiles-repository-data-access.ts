import {PrismaClient} from '@prisma/client';

export class StudentProfilesRepository
{
    prisma = new PrismaClient();

    async getName(userid : string)
    {
        return await this.prisma.user.findFirst({
            where:
            {
                id: userid
            },
            select:
            {
                name: true
            }
        });
    }

    async getDoB(userid : string)
    {        
        return await this.prisma.user.findFirst({
            where:
            {
                id: userid
            },
            select:
            {
                dateOfBirth : true
            }
        });
    }

    async getPfp(userid : string)
    {        
        return await this.prisma.userProfile.findFirst({
            where:
            {
                userId: userid
            },
            select:
            {
                profilePicture : true
            }
        });
    }

    async getBio(userid : string)
    {        
        return await this.prisma.userProfile.findFirst({
            where:
            {
                userId: userid
            },
            select:
            {
                bio : true
            }
        });
    }

    async getTags(userid : string)
    {        
        return await this.prisma.userTag.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                tag : true
            }
        });
    }

    async getSocialMedia(userid : string)
    {        
        return await this.prisma.userSocialMedia.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                type : true,
                link : true
            }
        });
    }

    async getLocation(userid : string)
    {        
        return await this.prisma.userLocation.findFirst({
            where:
            {
                userId: userid
            },
            select:
            {
                location : true
            }
        });
    }

    async getEmails(userid : string)
    {        
        return await this.prisma.userEmail.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                email : true
            }
        });
    }

    async getFiles(userid : string)
    {        
        return await this.prisma.userProfileFile.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                fileCategory : true,
                filePath : true,
                fileExtension : true
            }
        });
    }

    async getEmploymentStatus(userid : string)
    {   
        /*     
        return await this.prisma.userProfile.findFirst({
            where:
            {
                userId: userid
            },
            select:
            {
                EmploymentStatus : true,
                filePath : true,
                fileExtension : true
            }
        });
        */
    }
}