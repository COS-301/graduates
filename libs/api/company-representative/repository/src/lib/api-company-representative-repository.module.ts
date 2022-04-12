import { Module } from '@nestjs/common';
import { DataAccess } from './data-access';

@Module({
  controllers: [],
  providers: [DataAccess],
  exports: [],
})
export class ApiCompanyRepresentativeRepositoryModule {}
