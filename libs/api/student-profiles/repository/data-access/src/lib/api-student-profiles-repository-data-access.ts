import {FileCategory, PrismaClient, SocialMedia} from '@prisma/client';
import { FirebaseService, StorageRepository } from '@graduates/api/storage/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';

export class StudentProfilesRepository
{
    prisma = new PrismaClient();
    storage = new StorageRepository(new PrismaService,new FirebaseService)

    async getUserIDFromStudentNumber(studentnum : string)
    {
        const list = await this.prisma.userProfile.findMany({
            select:
            {
                userId: true,
                studentNumber: true
            }
        });
        list.forEach(i => {
            if (i.studentNumber==studentnum)
            {
                return i.userId;
            }
        });
        return null;
    }

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
                userId_type:
                {
                    userId: userid,
                    type: type
                }
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
                userId_email:
                {
                    userId : userid,
                    email: email
                }
            }
        });
    }

    /*
    ApiStorageInput
    {
        @Field(() => ID)
        userId!: string;
        @Field()
        fileCategory!: string;
        @Field()
        fileExtension!: string;
        @Field()
        filePath!: string;
    }
    */

    //get an array of links to all the user's files
    async getFiles(userid : string)
    {
        const list = await this.prisma.userProfileFile.findMany({
            where:
            {
                userId: userid
            },
            select:
            {
                fileId:true
            }
        });
        let result;
        list.forEach(i => {
            result.push(this.storage.getUserFiles(i));
        });
        return result;
    }

    //get an array of links to all the user's files
    async getSpesificFile(userid : string, type: FileCategory)
    {
        const list = await this.prisma.userProfileFile.findMany({
            where:
            {
                userId: userid,
                fileCategory: type
            },
            select:
            {
                fileId:true
            }
        });
        let result;
        list.forEach(i => {
            result.push(this.storage.getUserFiles(i));
        });
        return result;
    }

    async addFiles(userid : string, fileCategory : FileCategory, filePath : string, fileExtension : string)
    {        
        const newfile = new ApiStorage();
        newfile.userId = userid;
        newfile.fileCategory = fileCategory;
        newfile.filePath = filePath;
        newfile.fileExtension = fileExtension;
        this.storage.createFile(newfile);
    }

    async removeFiles(userid : string, fileCategory : FileCategory)
    {        
        this.storage.deleteFile(userid,fileCategory);
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