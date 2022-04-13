import { ApiStorage , ApiStorageInput } from '@graduates/api/storage/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { StorageRepository } from '@graduates/api/storage/repository/data-access'
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { FirebaseService } from '@graduates/api/storage/repository/data-access'
import { FileCategory } from '@prisma/client';
@Injectable()
export class ApiStorageServiceFeatureModule {
  repo = new StorageRepository(new PrismaService , new FirebaseService);
    async getFile(userID:string , fileCategory:string): Promise< string | null > {
      let promise;
      const storage = new ApiStorage();
      storage.userId= userID;

      //storage.fileCategory=fileCategory;

      if(fileCategory==="CV"){
        promise =  await this.repo.getUserFile(userID ,FileCategory.CV );
      }
      else if(fileCategory==="Transcript"){
        promise = await this.repo.getUserFile(userID ,FileCategory.DEGREE );

      }
      else if(fileCategory==="Academic Record"){
        promise = await this.repo.getUserFile(userID ,FileCategory.ACADEMIC_RECORD );
      }
        //this is printing before the printing is done because of getUserFile
        console.log("promise"+promise);
        if(promise)
        promise.then((url)=>{
          console.log("HERE"+url);
          return url;
        })

        return promise;
       
    }

    async deleteFile(userID , fileCategory): Promise<number> {
      let url = null;
      const storage = new ApiStorage();
      storage.userId= userID;
      storage.fileCategory=fileCategory;
      if(fileCategory=="CV"){
        url = await this.repo.deleteFile(userID ,FileCategory.CV );
      }
      if(fileCategory=="Transcript"){
        url = await this.repo.deleteFile(userID ,FileCategory.DEGREE );

      }
      if(fileCategory=="Academic Record"){
        url = await this.repo.deleteFile(userID ,FileCategory.ACADEMIC_RECORD );
      }
        return url;
    }

    async create(apiStorage: ApiStorage): Promise<ApiStorageInput>{
      const storage = new ApiStorageInput();
      const res = await this.repo.createFile(apiStorage) ;
      storage.userId= res.userId
      storage.fileExtension= res.fileExtension;
      if(res.fileCategory==FileCategory.CV){
        storage.fileCategory = "CV";
      }
      if(res.fileCategory==FileCategory.ACADEMIC_RECORD){
        storage.fileCategory = "Academic Record";
      }
      if(res.fileCategory==FileCategory.DEGREE){
        storage.fileCategory = "Transcript";
      }
      storage.filePath = res.filePath
      return storage;
    }
   
  }
