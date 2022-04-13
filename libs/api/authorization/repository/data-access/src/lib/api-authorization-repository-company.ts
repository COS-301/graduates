// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationAdmin,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
import { Injectable, Param } from '@nestjs/common';
//import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Injectable()
export class Companyauthorization {
  //constructor(private prisma: PrismaService) {}

  async findCompanyAutherization(@Param() id:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationAdmin> {
    const authCompany = new authorizationAdmin();
    authCompany.askingId = id;
    authCompany.u_permission.permission_t = userPermissions.permission_t;
    authCompany.u_permission.permission_category = userPermissions.permission_category;
    authCompany.u_permission.permission_tenant = userPermissions.permission_tenant;
    authCompany.r_permission.permission_t = rolePermissions.permission_t;
    authCompany.r_permission.permission_category = rolePermissions.permission_category;
    authCompany.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authCompany;
    //return this.prisma.user.findOne();
  }
  async findCompanyauthorizationUser(@Param() askingId:string,targetId:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationAdmin> {
    const authCompany = new authorizationAdmin();
    authCompany.askingId = askingId;
    authCompany.targetId = targetId;
    authCompany.u_permission.permission_t = userPermissions.permission_t;
    authCompany.u_permission.permission_category = userPermissions.permission_category;
    authCompany.u_permission.permission_tenant = userPermissions.permission_tenant;
    authCompany.r_permission.permission_t = rolePermissions.permission_t;
    authCompany.r_permission.permission_category = rolePermissions.permission_category;
    authCompany.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authCompany;
    //return this.prisma.user.findOne();
  }
}