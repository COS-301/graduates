import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiStorageResolver } from './api-storage.resolver';

describe('ApStorageResolver', () => {
  let resolver:ApiStorageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStorageResolver, ApiStorageServiceFeatureModule],
    }).compile();

    resolver = module.get<ApiStorageResolver>(ApiStorageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
/*const record = {fileCategory:"CV" , userID:"u20469366"}
class ApiStorageServiceMock {
  deleteFile(userID: string, fileCategory: string) {
    if(fileCategory.match(record.fileCategory)&&userID.match(record.userID)){
      return 1 ;
    }
    else{
      return 0;
    }
  }
  getFile(userID: string, fileCategory: string) {
    if(fileCategory=="CV"||fileCategory=="Transcript"||fileCategory=="Academic Record"){
      return "http:/"+userID+"/"+fileCategory;
    }
    else{
      return "File Category not found";
    }
  }
}
describe('StudentService', () => {
  let app: TestingModule;
  let studentResolver: ApiStorageResolver;
 
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ApiStorageServiceFeatureModule,
      useClass: ApiStorageServiceMock,
    };
    app = await Test.createTestingModule({
      providers:  [ApiServiceProvider,ApiStorageResolver],
    }).compile();
    studentResolver = app.get< ApiStorageResolver>( ApiStorageResolver);
  });
  describe('Get Url Test 1', () => {
    it('should get url', async () => {
      const expectedUrl = "http:/u20469366/CV";
      const url = await studentResolver.download("u20469366","CV");
      expect(url).toEqual(expectedUrl);
    });
  });
  describe('Get Url Test 2', () => {
    it('should get url', async () => {
      const expectedUrl = "File Category not found";
      const url = await studentResolver.download("u20469366","CK");
      expect(url).toEqual(expectedUrl);
    });
  });
  describe('Delete Record', () => {
    it('should get 1 because record is there', async () => {
      const numexp = 1;
      const num = await studentResolver.delete("u20469366","CV");
      expect(numexp).toEqual(num);
    });
  });
  describe('Delete Record', () => {
    it('should get 0 because record is not there', async () => {
      const numexp = 0;
      const num = await studentResolver.delete("u204677984","CV");
      expect(numexp).toEqual(num);
    });
  });
 });*/