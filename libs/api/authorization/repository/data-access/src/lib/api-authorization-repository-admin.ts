// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import {authorizationAdmin} from '../../../shared/src/lib/authorization-data-access.entity';
import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Prisma, UserPermissions } from '@prisma/client';
@Injectable()
export class Adminauthorization {
  constructor(private prisma: PrismaService) {}

  async findGeneralPermissions(@Param("id") id:string) {
    const role = await this.findRole(id);
    if(role != null){
      return this.prisma.rolePermissions.findMany({where: {role:  role.role}});
    }
    else{
      return null;
    }
  }
  async findGeneralPermissionsPrisma(input:Prisma.UserWhereUniqueInput) {
    const role = await this.findRole(input.id);
    if(role != null)
    {
    return this.prisma.rolePermissions.findMany({where: {role: role.role}});
    }
    else
    {
      return null;
    }
  }
  async findRole(@Param("id") id:string) {
    return this.prisma.userRole.findFirst({where: {userId: id}});
  }
  async findRolePrisma(input:Prisma.UserRoleWhereInput) {
    return this.prisma.userRole.findFirst({where: {userId: input.userId}});
  }
  async findUniquePermission(@Param("id") id:string) {
    return this.prisma.userPermissions.findMany({where: {userId: id}});
  }
  async findAllPermissions(@Param("id") id:string)
  {
    const generalPermissions = await this.findGeneralPermissions(id);
    const uniquePermissions = await this.findUniquePermission(id);
     return {generalPermissions,uniquePermissions};
  }
  async addUniquePermission(@Param() idasking:string,data: Prisma.UserPermissionsUncheckedCreateInput):Promise<UserPermissions|null> {
    const role = await this.findRole(idasking);
    if(role.role == "ADMIN")
    {
        if(await this.prisma.userPermissions.findUnique({where:{userId_permissionType_permissionCategory_permissionTenant:data}}) == null)
          {
            return this.prisma.userPermissions.create({data});
          }
  
    }
       return null;
  }
  async updateUniquePermission(@Param() askingId:string, 
    params:{where:Prisma.UserPermissionsWhereUniqueInput;
      data: Prisma.UserPermissionsUncheckedUpdateInput;}){

        const {where,data} = params;
        const role = await this.findRole(askingId);
        if(role.role == "ADMIN")
        {
          if(this.prisma.userPermissions.findUnique({where})!= null)
          {
            return this.prisma.userPermissions.update({data,where,});
          }
          
        }
      
          return null;
        
      }
      async deleteUniquePermission(@Param() askingId:string, 
      where:Prisma.UserPermissionsWhereUniqueInput){
  
          const role = await this.findRole(askingId);
          if(role.role == "ADMIN")
          {
            return this.prisma.userPermissions.delete({where});
          }
          else
          {
            return null;
          }
          
        }
  async addUserRole(@Param() askingId:string, data:Prisma.UserRoleCreateInput)
  {
    const role = await this.findRole(askingId);
    if(role.role == "ADMIN")
    {
      return this.prisma.userRole.create({data} );   }
  }
  async updateUserRole(@Param() idasking:string, params: {where: Prisma.UserRoleWhereUniqueInput; 
    data: Prisma.UserRoleUncheckedUpdateInput;}) {
    const role = this.findRole(idasking);
    const {where, data} = params
    if((await role).role == "ADMIN")
    {
        return this.prisma.userRole.update({data,where});
    }
    else
    {
       return null;
    }
  }
    async deleteUserRole(@Param() idasking:string, where: Prisma.UserRoleWhereUniqueInput) {
      const role = await this.findRole(idasking);
      if(role.role == "ADMIN")
      {
          return this.prisma.userRole.delete({where});
      }
      else
      {
         return null;
      }
    }
    async addRolePermissions(@Param() idasking:string, data:Prisma.RolePermissionsCreateInput) {
      const role = await this.findRole(idasking);
      if(role.role == "ADMIN")
      {
          return this.prisma.rolePermissions.create({data});
      }
      else
      {
         return null;
      }
    }
    async updateRolePermissions(@Param() idasking:string, params:{where: Prisma.RolePermissionsWhereUniqueInput;
      data:Prisma.RolePermissionsUpdateInput;}) {
        const {where,data} = params;
      const role = await this.findRole(idasking);
      if( role.role == "ADMIN")
      {
          return this.prisma.rolePermissions.update({data,where});
      }
      else
      {
         return null;
      }
    }
    async deleteRolePermissions(@Param() askingId:string, 
      where:Prisma.RolePermissionsWhereUniqueInput){
  
          const role = await this.findRole(askingId);
          if(role.role == "ADMIN")
          {
            return this.prisma.rolePermissions.delete({where});
          }
          else
          {
            return null;
          }
          
        }

    

}
