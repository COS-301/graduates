import { Module } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CompanyrepService } from 'libs/api/companyrep/service/feature/src/lib/companyrep.service';
import { CompanyrepController } from './companyrep.controller';
import { CompanyrepResolver } from './companyrep.resolver';


@Module({
    controllers: [CompanyrepController],
    providers: [CompanyrepResolver, CompanyrepResolver, CompanyrepService],
})
export class CompanyrepModule {}
