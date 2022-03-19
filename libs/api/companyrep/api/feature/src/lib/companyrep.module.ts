import { Module } from '@nestjs/common';
import { CompanyrepController } from './companyrep.controller';

@Module({
    controllers: [CompanyrepController],
})
export class CompanyrepModule {}
