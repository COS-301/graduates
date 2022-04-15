import {FileCategory, PrismaClient, SocialMedia} from '@prisma/client';

//todo: david roodt removeSocialMedia and removeEmail find out why composite doesn't work

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
                userId_tag:
                {
                    userId: userid,
                    tag: tag
                }
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

    async removeSocialMedia(userid : string, type: SocialMedia)
    {        
        return await this.prisma.userSocialMedia.delete({
            where:
            {
                userId: userid
                /* //the below should work will querry
                userId_type:
                {
                    userid: userid,
                    type: type
                }
                */
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

    async addEmail(userid : string, email: string)
    {        
        return await this.prisma.userEmail.create({
            data:
            {
                userId : userid,
                email: email
            }
        });
    }

    async removeEmail(userid : string, email: string)
    {        
        return await this.prisma.userEmail.delete({
            where:
            {
                userId : userid
                /*
                userId_email:
                {
                    userId : userid,
                    email: email
                }
                */
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
        return await this.prisma.userProfile.findFirst({
            where:
            {
                userId: userid
            },
            select:
            {
                employmentStatus : true,
                openToOffers : true
            }
        });
    }

    async setEmploymentStatus(userid : string, employmentstatus: boolean, opentooffers : boolean,)
    {   
        return await this.prisma.userProfile.update({
            data:
            {
                employmentStatus : employmentstatus,
                openToOffers : opentooffers
            },
            where:
            {
                userId: userid
            }
        });
    }

    async getDegrees(userid : string)
    {     
        return await this.prisma.userDegree.findMany({
            where:
            {
                userID: userid
            },
            select:
            {
                degreeType: true,
                degreeName : true
            }
        });
    }

    async addDegree(userid : string, degreetitle : string, degreename : string)
    {      
        return await this.prisma.userDegree.create({
            data:
            {
                userID: userid,
                degreeType: degreetitle,
                degreeName: degreename
            }
        });
    }

    async getCellNum(userid : string)
    {          
        return await this.prisma.userContactNumber.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                number : true
            }
        });
    }

    async addCellNum(userid : string, cellnum : string)
    {     
        return await this.prisma.userContactNumber.create({
            data:
            {
                userId: userid,
                number : cellnum
            }
        });
    }

    async removeCellNum(userid : string)
    {      
        return await this.prisma.userContactNumber.delete({
            where:
            {
                userId: userid
            }
        });
    }
}