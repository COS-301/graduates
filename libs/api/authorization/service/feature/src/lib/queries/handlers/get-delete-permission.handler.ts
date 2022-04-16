// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Prisma, User } from '@prisma/client';
import { GetDeletePermissionQuery } from '../impl/get-delete-permission.query';

/*
create-user.handler.ts
*/
@QueryHandler(GetDeletePermissionQuery)
export class GetDeletePermissionHandler
  implements IQueryHandler<GetDeletePermissionQuery>
{
  constructor(private repository: Adminauthorization) {}

  async execute(query: GetDeletePermissionQuery) {
    // Destruct data from command object
    const { userId } = query;

    return this.repository.findAllPermissionsFilter(userId, {
      equals: 'REMOVE',
    });
  }
}
