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
  @Mutation(returns => Boolean , { name: 'File' })
  async upload(
    @Args("filename")fileName:string,
    @Args("userId")userID:string,
     @Args("fileCategory")fileCategory:string,
    @Args("fileExtension")fileExtension:string,
    @Args('file', { type: () => GraphQLUpload }) file: FileUpload
  ): Promise<boolean|ApiStorageInput> {
    try {
      const { createReadStream } = file;
      const stream = createReadStream();
      const chunks = [];
      const buff = await new Promise<Buffer>((resolve, reject) => {
        let buff: Buffer;
        stream.on('data', function (chunk) {
          chunks.push(chunk);
        });
        stream.on('end', function () {
          buff = Buffer.concat(chunks);
          resolve(buffer);
        });
        stream.on('error', reject);
      });
      const buffer = Buffer.concat(chunks);
      const base64 = buffer.toString('base64');
      if(base64.length==0) {
        return false;
      }
      const storage = new ApiStorage();
      storage.fileAsString = base64;
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
    } catch (err) {
      return false;
    }
}

}

