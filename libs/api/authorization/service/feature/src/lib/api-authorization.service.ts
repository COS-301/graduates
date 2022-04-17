import { Injectable } from '@nestjs/common';
import { ApiAuthorization } from '@graduates/api/authorization/api/shared';
import { QueryBus } from '@nestjs/cqrs';
import { GetDeletePermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-delete-permission.query';
import { GetEditPermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-edit-permission.query';
import { GetViewPermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-view-permission.query';

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
}
