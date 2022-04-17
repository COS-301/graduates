import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Mutation, Query, Int, Resolver , ID, Args } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { ApiStorage , ApiStorageInput} from '@graduates/api/storage/api/shared/data-access';
import { FileCategory } from '@prisma/client';
import { createWriteStream } from 'fs';
import * as fs from 'fs/promises';
@Resolver(() => ApiStorage)
export class ApiStorageResolver {
  constructor(private storageService: ApiStorageServiceFeatureModule,
              ) {}
  @Query(() =>String)
  async download(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<string| boolean> {
    const res = await this.storageService.getFile(userID , fileCategory);
    if(res == null){
      return false
    }
    else{
      return res;
    }
   
  }
  @Query(() =>String)
  async delete(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<number| boolean> {
    const res = await this.storageService.deleteFile(userID , fileCategory);
    
    if(res == null){
      return false
    }
    else{
      return res;
    }
  }
  @Mutation(returns => String)
  async upload(
    @Args("filename")fileName:string,
    @Args("userId")userID:string,
     @Args("fileCategory")fileCategory:string,
    @Args("fileExtension")fileExtension:string,
    @Args('file') file:string
  ): Promise<boolean|ApiStorageInput> {
      const storage = new ApiStorage();
      console.log(fileCategory)
      storage.fileAsString = file;
      if(fileCategory=="CV"){
        storage.fileCategory = FileCategory.CV 
      }
      if(fileCategory=="Transcript"){
        storage.fileCategory = FileCategory.DEGREE
  
      }
      if(fileCategory=="Academic Record"){
        storage.fileCategory = FileCategory.ACADEMIC_RECORD
      }
      storage.userId = userID;
      storage.fileExtension = fileExtension;
      return await this.storageService.create(storage);
  }
  @Query(() =>String)
  pingStorage(){
    return "on";
  }
}


