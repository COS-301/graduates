import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';
import { Injectable } from '@nestjs/common';
import { FirebaseService ,StorageRepository } from '@graduates/api/storage/repository/data-access'
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Injectable()
export class ApiStorageServiceFeatureModule {
  service = new FirebaseService();
  repo = new StorageRepository(new PrismaService);
  async partialAdd(userID: string, fileCategory: string, fileExtension: string, filePath: string) {
    const storage = new ApiStorage();
    storage.userId = userID;
    storage.fileExtension = fileExtension;
    storage.filePath = filePath;
    storage.fileCategory = fileCategory;
    return storage; 
  }
    async getAll(): Promise<ApiStorage> {
      const storage = new ApiStorage();
      return storage;
    }
    async create(apiStorage: ApiStorage): Promise<ApiStorage>{
      const storage = new ApiStorage();
      storage.userId= apiStorage.userId;
      storage.fileExtension= apiStorage.fileExtension;
      storage.filePath= apiStorage.filePath;
      storage.fileCategory=apiStorage.fileCategory;
      return storage;
    }
   
  }