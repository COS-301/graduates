import {FileCategory, PrismaClient, SocialMedia} from '@prisma/client';
//todo: david roodt: implement employment status once added to db

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

    async setName(userid : string, newname : string)
    {
        return await this.prisma.user.update({
            data:
            {
                name: newname
            },
            where:
            {
                id: userid
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

    async setPfp(userid : string, newPfp : string)
    {
        return await this.prisma.userProfile.update({
            data:
            {
                profilePicture: newPfp
            },
            where:
            {
                userId: userid
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

    async setBio(userid : string, newbio : string)
    {
        return await this.prisma.userProfile.update({
            data:
            {
                bio: newbio
            },
            where:
            {
                userId: userid
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

    async addTag(userid : string, newtag : string)
    {
        return await this.prisma.userTag.create({
            data:
            {
                userId: userid,
                tag: newtag
            }
        });
    }

    async removeTag(userid : string, tag : string)
    {
        return await this.prisma.userTag.delete({
            where:
            {
                userId: userid
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

    async addSocialMedia(userid : string, type: SocialMedia, link: string)
    {        
        return await this.prisma.userSocialMedia.create({
            data:
            {
                userId: userid,
                type: type,
                link: link
            }
        });
    }

    async removeSocialMedia(userid : string)
    {        
        return await this.prisma.userSocialMedia.delete({
            where:
            {
                userId: userid
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

    async setLocation(userid : string, location: string)
    {        
        return await this.prisma.userLocation.update({
            data:
            {
                location: location
            },
            where:
            {
                userId : userid
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

    async setEmails(userid : string, email: string)
    {        
        return await this.prisma.userEmail.update({
            data:
            {
                email: email
            },
            where:
            {
                userId : userid
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

    async addFiles(userid : string, fileCategory : FileCategory, filePath : string, fileExtension : string)
    {        
        return await this.prisma.userProfileFile.create({
            data:
            {
                userId: userid,
                fileCategory : fileCategory,
                filePath : fileCategory,
                fileExtension : fileExtension
            }
        });
    }

    async removeFiles(userid : string, fileCategory : FileCategory)
    {        
        return await this.prisma.userProfileFile.delete({
            where:
            {
                fileId: userid
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