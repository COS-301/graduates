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
    
      return null;
    
  }
  async findGeneralPermissionsPrisma(id:string) {
    const role = await this.findRole(id);
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
    const obj = this.prisma.userRole.findFirst({where: {userId: id}});
      return obj;

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
    if(role != null && role.role == "ADMIN")
    {
        
      return this.prisma.userPermissions.create({data});
  
    }
       return null;
  }
  async updateUniquePermission(@Param() askingId:string, 
    params:{where:Prisma.UserPermissionsWhereUniqueInput;
      data: Prisma.UserPermissionsUncheckedUpdateInput;}){

        const {where,data} = params;
        const role = await this.findRole(askingId);
        if(role != null && role.role == "ADMIN")
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
          if(role != null && role.role == "ADMIN")
          {
            return this.prisma.userPermissions.delete({where});
          }
          else
          {
            return null;
          }
          
        }
  async addUserRole(@Param() askingId:string, data:Prisma.UserRoleUncheckedCreateInput)
  {
    const role = await this.findRole(askingId);
    if(role != null && role.role == "ADMIN")
    {
      return this.prisma.userRole.create({data} );   }
      return null;
  }
  async updateUserRole(@Param() idasking:string, params: {where: Prisma.UserRoleWhereUniqueInput; 
    data: Prisma.UserRoleUncheckedUpdateInput;}) {
    const role = await this.findRole(idasking);
    const {where, data} = params
    if( role != null && role.role == "ADMIN")
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
      if(role != null && role.role == "ADMIN")
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
      if(role != null && role.role == "ADMIN")
      {
          return this.prisma.rolePermissions.create({data});
      }
      
         return null;
    }
    async updateRolePermissions(@Param() idasking:string, params:{where: Prisma.RolePermissionsWhereUniqueInput;
      data:Prisma.RolePermissionsUpdateInput;}) {
        const {where,data} = params;
      const role = await this.findRole(idasking);
      if(role != null && role.role == "ADMIN")
      {
          return this.prisma.rolePermissions.update({data,where});
      }
      else
      {
         return null;
      }
    }
    async deleteRolePermissions(@Param() askingId:string, 
      where:Prisma.RolePermissionsWhereInput){
  
          const role = await this.findRole(askingId);
          if(role != null && role.role == "ADMIN")
          {
            return this.prisma.rolePermissions.deleteMany({where});
          }
          else
          {
            return null;
          }
          
        }

    

}
