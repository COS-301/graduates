import {FileCategory, PrismaClient } from '@prisma/client';
import { FirebaseService, StorageRepository } from '@graduates/api/storage/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';


export class UpIntegrationRepository 
{
    prisma = new PrismaClient();

    storage = new StorageRepository(new PrismaService,new FirebaseService)

    async getuserID_from_Studentno(studentnum : string)
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

            
        

    async get_name(userid : string)
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

    async set_name(userid : string, newname : string)
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

    async get_emails(userid : string)
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

    async add_email(userid : string, email: string)
    {        
        return await this.prisma.userEmail.create({
            data:
            {
                userId : userid,
                email: email
            }
        });
    }

    async get_files(userid : string)
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

    async add_files(userid : string, fileCategory : FileCategory, filePath : string, fileExtension : string)
    {        
        const newfile = new ApiStorage();
        newfile.userId = userid;
        newfile.fileCategory = fileCategory;
        newfile.filePath = filePath;
        newfile.fileExtension = fileExtension;
        this.storage.createFile(newfile);
    }

    async get_spesific_file(userid : string, type: FileCategory)
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

    async remove_files(userid : string, fileCategory : FileCategory)
    {        
        return await this.prisma.userProfileFile.delete({
            where:
            {
                fileId: userid
            }
        });
    }

//need to get degree title and to store the academic record and degree pdfs 
async get_degrees(userid : string)
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

async add_degree(userid : string, degreetitle : string, degreename : string)
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






}