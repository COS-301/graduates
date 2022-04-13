import { Injectable } from '@nestjs/common';
import { UserProfileFile, Prisma ,FileCategory } from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { FirebaseFolders,FirebaseService } from './FirebaseRepository.repository';
import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';

@Injectable()
export class StorageRepository {
  constructor(
    private prismaService: PrismaService,
    private firebaseService: FirebaseService
  ) {}

  //get an array of links to all the user's files
  async getUserFiles(u_id: Prisma.UserProfileFileWhereInput): Promise<string[] | null> {

    const arr : Promise<UserProfileFile[] | null> = this.prismaService.userProfileFile.findMany({
      where: u_id,
    });

    let ret:string[];
    arr.then((value) => {
      if(value){
        for(let i=0;i<value.length;i++)
        {
          const url = this.firebaseService.getURLByFilePath(value[i].filePath);
          
          url.then((value)=>{
            if(value)
              ret[ret.length-1]=value;
          });
        }
          return ret;
      }
      else
      return null;
    })

    return null;

  }

  //get a link to a specific user file
  async getUserFile(u_id: string, file_type:FileCategory): Promise<string|null> {
    const arr : Promise<UserProfileFile[] | null> = this.prismaService.userProfileFile.findMany({
      where: {
          userId: u_id,
          fileCategory: file_type
      }
    });
      //only the first element of array since it will be unique
      arr.then((value) => {
        if(value)
        return this.firebaseService.getURLByFilePath(value[0].filePath);
        else
        return null;
      }
      )

      return null;

  }
  //TODO update func, config

  //create a file record if the user does not already added this file type
  async createFile(data: ApiStorage) : Promise<UserProfileFile|null> {

   const u_id = data.userId;
   const file_category = data.fileCategory;
   const file_name = u_id+file_category;
   
   this.firebaseService.getURLByName(file_name, FirebaseFolders.Files)
      .then((value) => {
        if(value)
        this.firebaseService.uploadAsBase64String(data.fileAsString,file_name,FirebaseFolders.Files);
        else
        console.error('User already has this document');
        return null;
      });
    
   const file_ext = data.fileExtension;
   
   const file = await this.prismaService.userProfileFile.create({
    data: { userId: u_id,
            fileCategory: file_category,
            filePath: 'Files/'+file_name,
            fileExtension: file_ext },
    })
   return file;
  }

  //the file deleted will be unique since a user can only upload one file per type
  async deleteFile(u_id: string, file_category:FileCategory){
    return await this.prismaService.userProfileFile.deleteMany({
      where: {
        userId: u_id,
        fileCategory: file_category,
      },
    })
  }

  }