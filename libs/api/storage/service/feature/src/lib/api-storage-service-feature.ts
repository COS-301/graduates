import { ApiStorage , ApiStorageInput } from '@graduates/api/storage/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { StorageRepository } from '@graduates/api/storage/repository/data-access'
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { FirebaseService } from '@graduates/api/storage/repository/data-access'
import { FileCategory } from '@prisma/client';
import { fileURLToPath } from 'url';
@Injectable()
export class ApiStorageServiceFeatureModule {

  repo = new StorageRepository(new PrismaService , new FirebaseService);

    async getFile(userID:string , fileCategory:string): Promise< string | null > {

      let url=null;

      const storage = new ApiStorage();
      storage.userId= userID;

      //TODO ADD REST OF FILE TYPES @OmolemoMashigo
      if(fileCategory==="CV"){
        await this.repo.getUserFile(userID ,FileCategory.CV ).then(async (value)=> {
            url = value;
        });
      }
      else if(fileCategory==="Degree"){
        await this.repo.getUserFile(userID ,FileCategory.DEGREE).then(async (value)=> {
          url = value;
        });
      }
      else if(fileCategory==="Academic Record"){
        await this.repo.getUserFile(userID ,FileCategory.ACADEMIC_RECORD ).then(async (value)=> {
          url = value;
        });
      }
<<<<<<< HEAD
        //this is printing before the printing is done because of getUserFile
        console.log("promise"+promise);
        if(promise)
        promise.then((url)=>{
          console.log("HERE"+url);
          return url;
        })

        return promise;
=======
        return url;
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
       
    }

    async deleteFile(userID:string , fileCategory:string): Promise<number> {

      let num =0 ;

      //TODO ADD REST OF FILE TYPES @OmolemoMashigo
      const storage = new ApiStorage();
      storage.userId= userID;

      if(fileCategory==="CV"){
        await this.repo.deleteFile(userID ,FileCategory.CV ).then(async (value)=> {
          num = value;
        });
      }
      if(fileCategory=="Degree"){
        await this.repo.deleteFile(userID ,FileCategory.DEGREE ).then(async (value)=> {
          num = value;
        });
      }
      if(fileCategory=="Academic Record"){
        await this.repo.deleteFile(userID ,FileCategory.ACADEMIC_RECORD ).then(async (value)=> {
          num = value;
        });
      }
        return num;
    }

    async create(apiStorage: ApiStorage): Promise<ApiStorageInput|string>{
      
      //TODO ADD REST OF FILE TYPES @OmolemoMashigo
      const storage = new ApiStorage();
      storage.userId= apiStorage.userId;

      //value = UserProfileFile
      await this.repo.createFile(apiStorage).then(async (value)=> {
        storage.filePath = value.filePath;
      });

      return storage;
    }
   
  }