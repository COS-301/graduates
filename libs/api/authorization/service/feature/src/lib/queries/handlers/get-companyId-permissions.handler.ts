// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import {GetCompanyIdQuery} from '../impl/get-companyId-permission.query';

/*
create-user.handler.ts
*/
// const repo = new Adminauthorization(new PrismaService());

@QueryHandler(GetCompanyIdQuery)
export class GetCompanyIdHandler
  implements IQueryHandler<GetCompanyIdQuery>
{
  constructor(private repository: Adminauthorization) {
    repository = new Adminauthorization(new PrismaService());
  }

  async execute(query: GetCompanyIdQuery) {
    // Destruct data from command object
    const { userId } = query;

    return await this.repository.findCompanyid(userId);
  }
}