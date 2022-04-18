// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDeletePermissionQuery } from '../impl/get-delete-permission.query';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';

/*
create-user.handler.ts
*/
// const repo = new Adminauthorization(new PrismaService());

@QueryHandler(GetDeletePermissionQuery)
export class GetDeletePermissionHandler
  implements IQueryHandler<GetDeletePermissionQuery>
{
  constructor(private repository: Adminauthorization) {
    repository = new Adminauthorization(new PrismaService());
  }

  async execute(query: GetDeletePermissionQuery) {
    // Destruct data from command object
    const { userId } = query;

    return this.repository.findAllPermissionsFilter(userId, {
      equals: 'REMOVE',
    });
  }
}