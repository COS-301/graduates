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
<<<<<<< HEAD
  ): Promise<string| boolean> {
    const res = await this.storageService.getFile(userID , fileCategory);
    if(res == null){
      return false
    }
    else{
      return res;
    }
=======
  ): Promise<string | boolean> {

    let url :string|boolean = false;
    await this.storageService.getFile(userID , fileCategory).then(async(value) => {
      if(value)
      url = value;
    });
    return url;

>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
  }

  @Mutation(() =>String)
  async delete(
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string
  ): Promise<number> {
    
    let num = 0;
    await this.storageService.deleteFile(userID , fileCategory).then(async(value) => {
      num = value;
    });

    return num;
  }

  //TODO fix return type
  @Mutation(returns =>Boolean)
  async upload(
    @Args("filename")fileName:string,
    @Args("userId")userID:string,
    @Args("fileCategory")fileCategory:string,
    @Args("fileExtension")fileExtension:string,
    @Args('file') file:string
  ): Promise<boolean> {

      const storage = new ApiStorage();
      storage.fileAsString = file.substring(file.indexOf(',')+1,file.length);

      let ret = false;

      if(fileCategory==="CV"){
        storage.fileCategory = FileCategory.CV 
      }

      else if(fileCategory==="Transcript"){
        storage.fileCategory = FileCategory.DEGREE
  
      }

      else if(fileCategory==="Academic Record"){
        storage.fileCategory = FileCategory.ACADEMIC_RECORD
      }

      storage.userId = userID;
      storage.fileExtension = fileExtension;
      
      await this.storageService.create(storage).then( async (value) => {
        if(value)
        ret = true;
      })

      return ret;
}
@Query(() =>String)
  pingStorage(){
    return "on";
  }


}


