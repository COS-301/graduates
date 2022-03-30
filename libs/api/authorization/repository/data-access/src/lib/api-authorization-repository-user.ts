// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationStudent,roletype,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
import { Injectable, Param } from '@nestjs/common';
//import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Injectable()
export class userAuthorization {
  //constructor(private prisma: PrismaService) {}

  async findUserAuthorization(@Param() id:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationStudent> {
    const authUser = new authorizationStudent();
    authUser.askingId = id;
    authUser.role = roletype.STUDENT;
    authUser.u_permission.permission_t = userPermissions.permission_t;
    authUser.u_permission.permission_category = userPermissions.permission_category;
    authUser.u_permission.permission_tenant = userPermissions.permission_tenant;
    authUser.r_permission.permission_t = rolePermissions.permission_t;
    authUser.r_permission.permission_category = rolePermissions.permission_category;
    authUser.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authUser;
    //return this.prisma.user.findOne();
  }
  async findUserauthorizationUser(@Param() askingId:string,targetId:string,userPermissions:user_permissions,rolePermissions:role_permission):Promise<authorizationStudent> {
    const authUser = new authorizationStudent();
    authUser.askingId = askingId;
    authUser.targetId = targetId;
    authUser.role = roletype.STUDENT;
    authUser.u_permission.permission_t = userPermissions.permission_t;
    authUser.u_permission.permission_category = userPermissions.permission_category;
    authUser.u_permission.permission_tenant = userPermissions.permission_tenant;
    authUser.r_permission.permission_t = rolePermissions.permission_t;
    authUser.r_permission.permission_category = rolePermissions.permission_category;
    authUser.r_permission.permission_tenant = rolePermissions.permission_tenant;
    return authUser;
    //return this.prisma.user.findOne();
  }
}