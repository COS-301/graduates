
import { Injectable, Param } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApiAuthorization} from '../../../../api/shared/src/lib/api-authorization.entity';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {
  Prisma,
  RolePermissions,
  UserPermissions,
  UserRole,
} from '@prisma/client';
@Injectable()
export class Adminauthorization {
  constructor(private prisma: PrismaService) {}

  async findGeneralPermissions(
    @Param('id') id: string
  ): Promise<null | RolePermissions[]> {
    const role = await this.findRole(id);
    if (role != null) {
      return await this.prisma.rolePermissions.findMany({
        where: { role: role.role },
      });
    }
  

    return null;
  }
  async findCompanyid(
    @Param('id') id: string
  ):Promise<string> {
    const role = await this.findRole(id);
    if (role != null) {
      return (await this.prisma.user.findUnique({where: { id:id}})).companyId;
    }
    return null;
  }

  async findGeneralPermissionsPrisma(
    id: string
  ): Promise<null | RolePermissions[]> {
    const role = await this.findRole(id);
    if (role != null) {
      return await this.prisma.rolePermissions.findMany({
        where: { role: role.role },
      });
    } else {
      return null;
    }
  }
  async findRole(@Param('id') id: string): Promise<null | UserRole> {
    const obj = await this.prisma.userRole.findFirst({ where: { userId: id } });
    return obj;
  }
  async findAllPermissionsFilter(
    @Param('id') id: string,
    permissiontype: Prisma.EnumPermissionTypeFilter
  ):Promise<ApiAuthorization>{
    const role = await this.findRole(id);
    if (role != null) {
      const userPermissions = await this.prisma.userPermissions.findFirst({
        where: { userId: id, permissionType: permissiontype },
      });
      const rolePermissions = await this.prisma.rolePermissions.findFirst({
        where: { role: role.role, permissionType: permissiontype },
      });
      let returnitem:ApiAuthorization;
      returnitem.userRole = role.role;
      returnitem.companyId = await this.findCompanyid(id);
      if(permissiontype == 'VIEW' && (userPermissions != null || rolePermissions != null))
      {
        returnitem.accessPermission = true;
      }
      if(permissiontype == 'REMOVE' && (userPermissions != null || rolePermissions != null))
      {
        returnitem.deletePermission = true;
      }
      if(permissiontype == 'EDIT' && (userPermissions != null || rolePermissions != null))
      {
        returnitem.editPermission = true;
      }
      return returnitem;
    }
    return null;
  }
  async findRolePrisma(input: Prisma.UserRoleWhereInput): Promise<UserRole> {
    return await this.prisma.userRole.findFirst({ where: { userId: input.userId } });
  }
  async findUniquePermission(
    @Param('id') id: string
  ): Promise<UserPermissions[]> {
    return await this.prisma.userPermissions.findMany({ where: { userId: id } });
  }
  async findAllPermissions(@Param('id') id: string): Promise<{
    generalPermissions: RolePermissions[];
    uniquePermissions: UserPermissions[];
  }> {
    const generalPermissions = await this.findGeneralPermissions(id);
    const uniquePermissions = await this.findUniquePermission(id);
    return { generalPermissions, uniquePermissions };
  }
  async addUniquePermission(
    @Param() idasking: string,
    data: Prisma.UserPermissionsUncheckedCreateInput
  ): Promise<UserPermissions | null> {
    const role = await this.findRole(idasking);
    if (role != null && role.role == 'ADMIN') {
      return await this.prisma.userPermissions.create({ data });
    }
    return null;
  }
  async updateUniquePermission(
    @Param() askingId: string,
    params: {
      where: Prisma.UserPermissionsWhereUniqueInput;
      data: Prisma.UserPermissionsUncheckedUpdateInput;
    }
  ): Promise<UserPermissions | null> {
    const { where, data } = params;
    const role = await this.findRole(askingId);
    if (role != null && role.role == 'ADMIN') {
      if (this.prisma.userPermissions.findUnique({ where }) != null) {
        return await this.prisma.userPermissions.update({ data, where });
      }
    }

    return null;
  }
  
  async deleteUniquePermission(
    @Param() askingId: string,
    where: Prisma.UserPermissionsWhereUniqueInput
  ): Promise<UserPermissions | null> {
    const role = await this.findRole(askingId);
    if (role != null && role.role == 'ADMIN') {
      if ((await this.prisma.userPermissions.findUnique({ where })) != null) {
        return await this.prisma.userPermissions.delete({ where });
      }
    } else {
      return null;
    }
  }
  async addUserRole(
    @Param() askingId: string,
    data: Prisma.UserRoleUncheckedCreateInput
  ): Promise<UserRole | null> {
    const role = await this.findRole(askingId);
    if (role != null && role.role == 'ADMIN') {
      if (
        (await this.prisma.userRole.findUnique({
          where: { userId_role: { userId: data.userId, role: data.role } },
        })) == null
      ) {
        return await this.prisma.userRole.create({ data });
      }
    }
    return null;
  }
  async updateUserRole(
    @Param() idasking: string,
    params: {
      where: Prisma.UserRoleWhereUniqueInput;
      data: Prisma.UserRoleUncheckedUpdateInput;
    }
  ): Promise<UserRole | null> {
    const role = await this.findRole(idasking);
    const { where, data } = params;
    if (role != null && role.role == 'ADMIN') {
      if (await this.prisma.userRole.findUnique({ where }))
        return await this.prisma.userRole.update({ data, where });
    } else {
      return null;
    }
  }
  async deleteUserRole(
    @Param() idasking: string,
    where: Prisma.UserRoleWhereUniqueInput
  ): Promise<UserRole | null> {
    const role = await this.findRole(idasking);
    if (role != null && role.role == 'ADMIN') {
      return await this.prisma.userRole.delete({ where });
    } else {
      return null;
    }
  }
  async addRolePermissions(
    @Param() idasking: string,
    data: Prisma.RolePermissionsCreateInput
  ): Promise<RolePermissions | null> {
    const role = await this.findRole(idasking);
    if (role != null && role.role == 'ADMIN') {
      return await this.prisma.rolePermissions.create({ data });
    }

    return null;
  }
  async updateRolePermissions(
    @Param() idasking: string,
    params: {
      where: Prisma.RolePermissionsWhereUniqueInput;
      data: Prisma.RolePermissionsUpdateInput;
    }
  ): Promise<RolePermissions | null> {
    const { where, data } = params;
    const role = await this.findRole(idasking);
    if (role != null && role.role == 'ADMIN') {
      return await this.prisma.rolePermissions.update({ data, where });
    } else {
      return null;
    }
  }
  async deleteRolePermissions(
    @Param() askingId: string,
    where: Prisma.RolePermissionsWhereInput
  ): Promise<Prisma.BatchPayload | null> {
    const role = await this.findRole(askingId);
    if (role != null && role.role == 'ADMIN') {
      return await this.prisma.rolePermissions.deleteMany({ where });
    } else {
      return null;
    }
  }
}
