import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Mutation, Query, Int, Resolver , ID, Args } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { FirebaseService } from '@graduates/api/storage/repository/data-access';
import { ApiStorage , ApiStorageInput } from '@graduates/api/storage/api/shared/data-access';
import { createWriteStream } from 'fs';
import * as fs from 'fs/promises';
@Resolver(() => ApiStorage)
export class ApiStorageResolver {
  constructor(private storageService: ApiStorageServiceFeatureModule,
              private Firebaseservice: FirebaseService) {}
  @Query(() => ApiStorage)
  storage(): Promise<ApiStorage> {
    return this.storageService.getAll();
  }
  @Mutation(returns=>ApiStorage)
  async setAll(@Args('CreateApiStorage')apiStorage: ApiStorageInput)
    :Promise<ApiStorageInput>{
      return await this.storageService.create(apiStorage);
    }
    //this partially fills the ApiStorage schema using the arguments userID , fileCategory and fileExtension
  @Mutation(returns=>ApiStorage) async setPartial
  (@Args("userId")userID:string,
   @Args("fileCategory")fileCategory:string,
   @Args("fileExtension")fileExtension:string,
   @Args("filePath")filePath:string){
     return this.storageService.partialAdd(userID, fileCategory, fileExtension, filePath);
  }

  @Mutation(() => Int, { name: 'File' })
  async upload(@Args("filename")filename:string,
    @Args('file', { type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<number> {
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
      this.Firebaseservice.uploadFileAsString(base64,filename)
      return base64.length
    } catch (err) {
      return 0;
    }
}
}

