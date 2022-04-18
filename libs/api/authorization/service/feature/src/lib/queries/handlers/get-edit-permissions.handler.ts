// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetEditPermissionQuery } from '../impl/get-edit-permission.query';

/*
create-user.handler.ts
*/
@QueryHandler(GetEditPermissionQuery)
export class GetEditPermissionHandler
  implements IQueryHandler<GetEditPermissionQuery>
{
  constructor(private repository: Adminauthorization) {}

  async execute(query: GetEditPermissionQuery) {
    // Destruct data from command object
    const { userId } = query;

    return this.repository.findAllPermissionsFilter(userId, {
      equals: 'EDIT',
    });
  }
}