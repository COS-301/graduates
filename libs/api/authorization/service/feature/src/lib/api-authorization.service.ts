import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../../api/shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';
import { GetDeletePermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-delete-permission.query';
import { GetEditPermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-edit-permission.query';
import { GetViewPermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-view-permission.query';
import { GetRoleQuery } from '../lib/queries/impl/get-role-permissions.query';
import { GetCompanyIdQuery } from '../lib/queries/impl/get-companyId-permission.query';
@Injectable()
export class ApiAuthorizationService {
  constructor(private service: ApiAuthorization, private queryBus: QueryBus) {}

  async findOneById(id: string): Promise<ApiAuthorization> {
    const data = {
      userRole: 'Student',
      companyId: '220432083',
      accessPermission: true,
      editPermission: true,
      deletePermission: false,
    };
    return data;
  }

  async GetDeletePermidssions(userId: string): Promise<ApiAuthorization> {
    return this.queryBus.execute(new GetDeletePermissionQuery(userId));
  }

  async GetEditPermidssions(userId: string): Promise<ApiAuthorization> {
    return this.queryBus.execute(new GetEditPermissionQuery(userId));
  }

  async GetViewPermidssions(userId: string): Promise<ApiAuthorization> {
    return this.queryBus.execute(new GetViewPermissionQuery(userId));
  }
  async GetRoleQueryPermissions(userId: string): Promise<string> {
    return this.queryBus.execute(new GetRoleQuery(userId));
  }
  async GetCompanyId(userId: string): Promise<string> {
    return this.queryBus.execute(new GetCompanyIdQuery(userId));
  }
}
