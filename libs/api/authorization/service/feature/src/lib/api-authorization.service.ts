import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../../api/shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';
import { GetDeletePermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-delete-permission.query';
import { GetEditPermissionQuery } from '../lib/queries/impl/get-edit-permission.query';
import { GetViewPermissionQuery } from '../../../../service/feature/src/lib/queries/impl/get-view-permission.query';
import { GetRoleQuery } from '../lib/queries/impl/get-role-permissions.query';
import { GetCompanyIdQuery } from '../lib/queries/impl/get-companyId-permission.query';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GetRoleQueryPermissionHandler} from '../lib/queries/handlers/get-role-permissions.handler';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import {GetBlogsQuery} from '../../../../../adminconsole/service/feature/src/lib/queries/impl/get-blogs.query';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from 'libs/api/authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository';
@Injectable()
export class ApiAuthorizationService {
  private  repository: Adminauthorization;
  constructor( private queryBus: QueryBus) { this.repository = new Adminauthorization(new PrismaService)}

  async findOneById(id: string) {
   
     return this.queryBus.execute(new GetEditPermissionQuery(id));
  }

  async GetDeletePermidssions(userId: string): Promise<any> {
    return await this.repository.findAllPermissionsFilter(userId,{equals:'REMOVE'});
  }

  async GetEditPermidssions(userId: string) {
    return await this.repository.findAllPermissionsFilter(userId,{equals:'EDIT'});
  }

  async GetViewPermidssions(userId: string): Promise<ApiAuthorization> {
    return await this.repository.findAllPermissionsFilter(userId,{equals:'EDIT'});
  }
  async GetRoleQueryPermissions(userId: string): Promise<any> {
    if((await this.repository.findRole(userId))!= null)
    {
      return (await this.repository.findRole(userId)).role;
    }
    else
    {
      return null;
    }
    
  }
  async GetCompanyId(userId: string): Promise<any> {
    return await this.repository.findCompanyid(userId);
  }
}
