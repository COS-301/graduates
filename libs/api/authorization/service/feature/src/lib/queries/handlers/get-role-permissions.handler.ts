// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetRoleQuery } from '../impl/get-role-permissions.query';

/*
create-user.handler.ts
*/
@QueryHandler(GetRoleQuery)
export class GetRoleQueryPermissionHandler
  implements IQueryHandler<GetRoleQuery>
{
  constructor(private repository: Adminauthorization) {}

  async execute(query: GetRoleQuery) {
    // Destruct data from command object
    const { userId } = query;

    const role= (await this.repository.findRole(userId)).role;
    return {role};
  }
}