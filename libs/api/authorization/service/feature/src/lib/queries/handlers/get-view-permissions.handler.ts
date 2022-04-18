// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetViewPermissionQuery } from '../impl/get-view-permission.query';

/*
create-user.handler.ts
*/
@QueryHandler(GetViewPermissionQuery)
export class GetViewPermissionHandler
  implements IQueryHandler<GetViewPermissionQuery>
{
  constructor(private repository: Adminauthorization) {}

  async execute(query: GetViewPermissionQuery) {
    // Destruct data from command object
    const { userId } = query;

    return this.repository.findAllPermissionsFilter(userId, {
      equals: 'VIEW',
    });
  }
}