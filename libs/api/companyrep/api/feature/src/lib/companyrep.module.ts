import { Module } from '@nestjs/common';
import { CompanyrepController } from './companyrep.controller';
import { CompanyrepService } from './companyrep/companyrep.service';
import { CompanyrepResolver } from './companyrep/companyrep.resolver';

@Module({
    controllers: [CompanyrepController],
    providers: [CompanyrepResolver, CompanyrepService, CompanyrepResolver],
})
export class CompanyrepModule {}
