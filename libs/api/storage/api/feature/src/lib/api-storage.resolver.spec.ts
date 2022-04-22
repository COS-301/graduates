import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiStorageResolver } from './api-storage.resolver';
import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';
import { QueryBus } from '@nestjs/cqrs';
import { prisma } from '@prisma/client';

const MockApiImpl : jest.Mocked<ApiStorage> = new ApiStorage() as ApiStorage;


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

describe('ApiStorageResolver', () => {
  let resolver: ApiStorageResolver;
  //let queryBus: QueryBus;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiStorageResolver,
        ApiStorageServiceFeatureModule,
        ApiStorage,
        QueryBus,
      ],
    }).compile();
    //queryBus = module.get<QueryBus>(QueryBus);
    resolver = module.get<ApiStorageResolver>(ApiStorageResolver);
  });

it('Should be thruthy', async () => {
  jest
    .spyOn(resolver, 'upload')
    .mockImplementation(
      (): Promise< boolean> =>
        Promise.resolve(true)
    );
    expect(resolver.upload).not.toHaveBeenCalled();
  
  expect(await resolver.upload("MuzisCV","1","CV","PDF","blob")).toBeTruthy();
  expect(resolver.upload).toHaveBeenCalled();
});

it('To be string or thurthy', async () => {
  jest
    .spyOn(resolver, 'download')
    .mockImplementation(
      (): Promise<string | boolean> =>
        Promise.resolve(true)
    );
    expect(resolver.download).not.toHaveBeenCalled();

  expect(await resolver.download("1","CV")).toBeTruthy();
  expect(resolver.download).toHaveBeenCalled();
});

it('To be truthy delete', async () => {
  jest
    .spyOn(resolver, 'delete')
    .mockImplementation(
      (): Promise<number> =>
        Promise.resolve(1)
    );

    expect(resolver.delete).not.toHaveBeenCalled();
  expect(await resolver.delete("1","CV")).toBeTruthy();
  expect(resolver.delete).toHaveBeenCalled();
});

});


 const record = {fileCategory:"CV" , userID:"u20469366"}

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
// }
// describe('ApiStorageResolver', () => {
//   let app: TestingModule;
//   let studentResolver: ApiStorageResolver;

//   beforeAll(async () => {
//     const ApiServiceProvider = {
//       provide: ApiStorageServiceFeatureModule,
//       useClass: ApiStorageServiceMock,
//     };
//     app = await Test.createTestingModule({
//       providers:  [ApiServiceProvider,ApiStorageResolver],
//     }).compile();
//     studentResolver = app.get< ApiStorageResolver>( ApiStorageResolver);
//   });
  // describe('Get Url Test', () => {
  //   it('should get url', async () => {
  //     const expectedUrl = "http:/u20469366/CV";
  //     const url = studentResolver.download("u20469366","CV");
  //     expect(url).toEqual(expectedUrl);
  //   });
  // });
  // describe('Get Url Test', () => {
  //   it('should not get url', async () => {
  //     const expectedUrl = "File Category not found";
  //     const url = await studentResolver.download("u20469366","CK");
  //     expect(url).toEqual(expectedUrl);
  //   });
  // });
  // describe('Delete Record', () => {
  //   it('should get 1 because record is there', async () => {
  //     const numexp = 1;
  //     const num = await studentResolver.delete("u20469366","CV");
  //     expect(numexp).toEqual(num);
  //   });
  // });
  // describe('Delete Record', () => {
  //   it('should get 0 because record is not there', async () => {
  //     const numexp = 0;
  //     const num = await studentResolver.delete("u204677984","CV");
  //     expect(numexp).toEqual(num);
  //   });
  // });

//  });
