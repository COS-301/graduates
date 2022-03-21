import { Module } from '@nestjs/common';
import { Companyrep } from './companyrep.model';
import { NewCompanyrepInput } from './new-companyrep.input';

@Module({
  controllers: [],
  providers: [NewCompanyrepInput, Companyrep],
  exports: [],
})
export class ApiCompanyrepApiSharedDataAccessModule {}
