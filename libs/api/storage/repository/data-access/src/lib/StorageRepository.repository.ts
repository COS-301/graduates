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

  async getUserFiles(u_id: Prisma.UserProfileFileWhereInput): Promise<UserProfileFile[] | null> {
    return this.prismaService.userProfileFile.findMany({
      where: u_id,
    });
  }

  //TODO rest of categories
  async getUserDegree(u_id: string, file_type:FileCategory): Promise<string|null> {
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

  /*@MuziwandileTNdlovu check changes to api-storage. If you cant give me the name I will 
  code a hashing function*/
  async createFile(data: ApiStorage) : Promise<UserProfileFile> {

   const file_name = data.fileNameOrHash;
   this.firebaseService.uploadAsBase64String(data.fileAsString,file_name,FirebaseFolders.Files);
   const u_id = data.userId;
   const file_ext = data.fileExtension;
   const file_category = data.fileCategory;
   
   const file = await this.prismaService.userProfileFile.create({
    data: { userId: u_id,
            fileCategory: file_category,
            filePath: 'Files/'+file_name,
            fileExtension: file_ext },
    })
   return file;
  }
/*
  async createFile2(u_id: string, file_Path: string, file_category: FileCategory, file_ext: string ) : Promise<UserProfileFile> {
    const file = await this.prismaService.userProfileFile.create({
      data: { userId: u_id,
              fileCategory: file_category,
              filePath: file_Path,
              fileExtension: file_ext },
    })
    return file;
  }
}
/*
  //file_Path = Files/fileName for Firebase retrieval;
  async createFile(binaryFile: string, fileName: string, u_id: string, file_category: FileCategory, file_ext:string) : Promise<UserProfileFile> ;
  async createFile(u_id: string, file_Path: string, file_category: FileCategory, file_ext: string ) : Promise<UserProfileFile> ;
  async createFile(arg1: string, arg2: string, arg3: string | FileCategory, arg4: string | FileCategory, arg5? : string) {
    if(typeof(arg3) === 'string' && typeof(arg4) !== 'string' && arg5)
    {
      FirebaseService.uploadFileAsString(arg1,arg2);
      this.createFile(arg3,"Files/"+arg2,arg4,arg5)
    }
    else if(typeof(arg4) === 'string' && typeof(arg3) !== 'string') {
      const file = await this.prismaService.userProfileFile.create({
        data: { userId: arg1,
                fileCategory: arg3,
                filePath: arg2,
                fileExtension: arg4 },
      })
      return file;
    }*/
  }