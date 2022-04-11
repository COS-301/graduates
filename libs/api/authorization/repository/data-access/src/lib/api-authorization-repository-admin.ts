// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationAdmin,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
import { Injectable, Param } from '@nestjs/common';
//import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Injectable()
export class Adminauthorization {
  //constructor(private prisma: PrismaService) {}

  async findAdminAtherization(@Param() id:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationAdmin> {
    const authAdmin = new authorizationAdmin();
    authAdmin.askingId = id;
    authAdmin.u_permission.permission_t = userPermissions.permission_t;
    authAdmin.u_permission.permission_category = userPermissions.permission_category;
    authAdmin.u_permission.permission_tenant = userPermissions.permission_tenant;
    authAdmin.r_permission.permission_t = rolePermissions.permission_t;
    authAdmin.r_permission.permission_category = rolePermissions.permission_category;
    authAdmin.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authAdmin;
    //return this.prisma.user.findOne();
  }
  async findAdminauthorizationUser(@Param() askingId:string,targetId:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationAdmin> {
    const authAdmin = new authorizationAdmin();
    authAdmin.askingId = askingId;
    authAdmin.targetId = targetId;
    authAdmin.u_permission.permission_t = userPermissions.permission_t;
    authAdmin.u_permission.permission_category = userPermissions.permission_category;
    authAdmin.u_permission.permission_tenant = userPermissions.permission_tenant;
    authAdmin.r_permission.permission_t = rolePermissions.permission_t;
    authAdmin.r_permission.permission_category = rolePermissions.permission_category;
    authAdmin.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authAdmin;
    //return this.prisma.user.findOne();
  }
}
