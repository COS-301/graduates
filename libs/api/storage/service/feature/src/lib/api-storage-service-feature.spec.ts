import { Test, TestingModule } from '@nestjs/testing';
import { ApiStorageServiceFeatureModule } from './api-storage-service-feature';
import { ApiStorage , ApiStorageInput } from '@graduates/api/storage/api/shared/data-access';


describe( 'ApiStorageServiceFeatureModule', () => {
  let service: ApiStorageServiceFeatureModule;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ ApiStorageServiceFeatureModule],
    }).compile();

    service = module.get (ApiStorageServiceFeatureModule);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

});
const record = {fileCategory:"CV" , userID:"u19027372"}


class ApiStorage_inputMock  {
   userId: string;
   fileExtension: string;
  fileCategory: string;
   filePath: string;
};

const ApiStorage_DTO = {
  userId: 'u19027372',

  fileCategory: 'CV',

  fileExtension: 'PDF',

  filePath: 'Downloads/videos',



};
export class StorageServiceMock {
  deleteFile(userID: string, fileCategory: string) {
    if(fileCategory.match(record.fileCategory)&&userID.match(record.userID)){
      return 1 ;
    }
    else{
      return 0;
    }
  }
  getFilee(userID: string, fileCategory: string) {
    if(fileCategory=="CV"||fileCategory=="Transcript"||fileCategory=="Academic Record"){
      return "http:/"+userID+"/"+fileCategory;
    }
    else{
      return "File Category not found";
    }
  }

  async create(apiStorage: ApiStorage_inputMock){
    let count=0;
    const storage = new ApiStorage_inputMock();
    const res =  apiStorage ;//create file
    storage.userId= res.userId
    storage.fileExtension= res.fileExtension;
    if(res.fileCategory=="CV"){
      storage.fileCategory = "CV";
      count=1;
    }
    if(res.fileCategory=="Academic Record"){
      storage.fileCategory = "Academic Record";
      count=1;
    }
    if(res.fileCategory=="Transcript"){
      storage.fileCategory = "Transcript";
      count=1;
    }
    storage.filePath = res.filePath
    if(count==1)
      return storage;

      return new ApiStorageInput();

  }



}

const servicemock=new  StorageServiceMock();

describe( 'Student Service', () => {

  describe('Get Url Test 1', () => {
    it('should get url', async () => {

         const url = servicemock.getFilee(record.userID,record.fileCategory)
         const expectedUrl = "http:/u19027372/CV";
         expect(url).toBe(expectedUrl);

    });
  });

  describe('Get Url Test 2', () => {
    it('should return File Category not found', async () => {

         const url = servicemock.getFilee(record.userID,"youtube Video")
         const expectedUrl = "File Category not found";
         expect(url).toBe(expectedUrl);

    });
  });

  describe('Delete', () => {
    it('should return  1, since the file  exist', async () => {

         const url = servicemock.deleteFile(record.userID,record.fileCategory)
         const expectedValue = 1;
         expect(url).toBe(expectedValue);

    });
  });

  describe('Delete', () => {
    it('should return  0, since the file does not exist', async () => {

         const url = servicemock.deleteFile("u190273722","Portfolio")
         const expectedValue = 0;
         expect(url).toBe(expectedValue);

    });
  });

  describe('Create', () => {
    it('should return a valid object', async () => {
          const apistorage=new ApiStorage_inputMock();

          apistorage.fileCategory="CV"
          apistorage.fileExtension="PDF"
          apistorage.filePath="Downloads/videos"
          apistorage.userId="u19027372"
         const obj = servicemock.create(apistorage);
         const expectedobject = apistorage;
         expect((await obj).fileCategory).toBe(expectedobject.fileCategory);

    });
  });

  describe('Create', () => {
    it('should return an  undefined', async () => {
          const apistorage=new ApiStorage_inputMock();

          apistorage.fileCategory="CK"
          apistorage.fileExtension="PDF"
          apistorage.filePath="Downloads/videos"
          apistorage.userId="u19027372"
         const obj = servicemock.create(apistorage);
          expect((await obj).fileCategory).toBeUndefined();
    });
  });

});








