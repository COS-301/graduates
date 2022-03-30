import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiStorageServiceFeatureModule {
  async get_all(): Promise<ApiStorage[]> {
    const storage = new ApiStorage();
    storage.id = 'u20469366';
    storage.transcript = false;
    storage.cv = true;
    return [storage];
  }
}
