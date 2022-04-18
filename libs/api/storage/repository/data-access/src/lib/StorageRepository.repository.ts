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
  async getUserFiles(u_id: Prisma.UserProfileFileWhereInput): Promise<string[]> {

    const ret:string[] = [];

    await this.prismaService.userProfileFile.findMany({
      where: u_id,
    }).then(async (value) => {
      if(value){
        for(let i=0;i<value.length;i++)
        {
          await this.firebaseService.getURLByFilePath(value[i].filePath).then(async (value)=>{
              if(value)
              ret[ret.length-1]=value;
          });
        }     
      }
    })

    return ret;

  }

  //get a link to a specific user file
  async getUserFile(u_id: string, file_type:FileCategory): Promise<string|null> {

    let ret = null;
    await this.prismaService.userProfileFile.findMany({
      where: {
          userId: u_id,
          fileCategory: file_type
      }
    }).then(async (value) => {
        if(value.length>0)
        {
        await this.firebaseService.getURLByFilePath(value[0].filePath).then(async (value)=> {
          ret = value;
        });
        
        }
      }
    );
    return ret;
  }

  //create a file record if the user does not already added this file type
  async createFile(data: ApiStorage) : Promise<UserProfileFile|null> {

   const u_id = data.userId;
   const file_category = data.fileCategory;
   const file_name = u_id+file_category;
   
   let file = null;
   await this.determineFirebaseFolder(file_category).then(async (folder) => {
      if(folder)
      {
        
        await this.firebaseService.getURLByName(file_name, folder)
            .then( async (value) => {

              if(value==null)
              {

              //send file to firebase
              await this.firebaseService.uploadAsBase64String(data.fileAsString,file_name,folder);

              const file_ext = data.fileExtension;
        
              //add file to database along with link to firebase storage
              file = await this.prismaService.userProfileFile.create({
                data: { userId: u_id,
                        fileCategory: file_category,
                        filePath: folder+'/'+file_name,
                        fileExtension: file_ext },
                })
              }
              else
              console.error('User already has this document');
              
            });
      }
    }
   );
   return file;
  }

  //the file deleted will be unique since a user can only upload one file per type
  async deleteFile(u_id: string, file_category:FileCategory){

    //delete in firebase
    await this.prismaService.userProfileFile.findMany({
      where: {
          userId: u_id,
          fileCategory: file_category
      }
    }).then(async (value) => {
      if(value[0])
      await this.firebaseService.deleteByFilePath(value[0].filePath);
    }
    );

    let size = 0;

    //delete in database
    await this.prismaService.userProfileFile.deleteMany({
      where: {
        userId: u_id,
        fileCategory: file_category,
      },
    }).then(async (value) => {
      if(value)
      size = value.count;
    })
    return size;
  }

  async deleteUserFiles(u_id: string){

    //delete in firebase
    await this.prismaService.userProfileFile.findMany({
      where: {
          userId: u_id,
      }
    }).then(async (value) => {
      for(let i=0;i<value.length;i++)
      {
        if(value[i])
        await this.firebaseService.deleteByFilePath(value[i].filePath);
      }
    }
    );

    let size = 0;
    
    //delete in database
    await this.prismaService.userProfileFile.deleteMany({
      where: {
        userId: u_id,
      },
    }).then(async (value) => {
      if(value)
      size = value.count;
    })
    return size;
  }

  async updateUserFile(u_id:string,file_category:FileCategory,fileAsBase64:string){

    await this.determineFirebaseFolder(file_category).then(async (value) => {
      if(value)
      {
        this.firebaseService.deleteByFilePath(value+'/'+u_id+file_category);
        this.firebaseService.uploadAsBase64String(fileAsBase64,u_id+file_category,value);
      }
    })
    
  }

   async determineFirebaseFolder(file_category:FileCategory): Promise<FirebaseFolders|null>{
    if(file_category==='CV' || file_category ==='DEGREE' || file_category ==='ACADEMIC_RECORD')
    return FirebaseFolders.Files;
    if(file_category==='PROFILE_PHOTO')
    return FirebaseFolders.ProfilePhotos;
    else
    {
    console.error('File Category not accepted');
    return null;
    }

  }

  }