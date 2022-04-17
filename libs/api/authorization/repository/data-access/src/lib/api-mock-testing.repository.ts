import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Prisma, UserPermissions } from '@prisma/client';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
@Injectable()
export class MockTestAuthorizationRepo {
  constructor(private prisma: PrismaService) {}

  async findGeneralPermissions(@Param("id") id:string) {
    if(id == '9'){
        return [{role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"NONE"}];
    }
      return null;
    
  }
  async findGeneralPermissionsPrisma(id:string) {
    if(id == '9'){
        return [{role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"NONE"}];
    }
      return null;
  }
  async findRole(@Param("id") id:string) {
      if(id == '11'){return null;}
      if(id=='9')
      {
        return {userId:"9",role:"ADMIN"};
      }

        

  }
  async findAllPermissionsFilter(@Param("id") id:string, permissiontype:Prisma.EnumPermissionTypeFilter) {
      if(id=='11'){return null;}
      if(permissiontype.equals=='ARCHIVE'){return null;}
    return {userPermissions: [
        {
          userId: '9',
          permissionType: 'CREATE',
          permissionCategory: 'PROFILE',
          permissionTenant: 'USER'
        }
      ],
      rolePermissions: [
        {
          role: 'ADMIN',
          permissionType: 'CREATE',
          permissionCategory: 'PROFILE',
          permissionTenant: 'USER'
        }
      ]};

  }
  async findRolePrisma(input:Prisma.UserRoleWhereInput) {
    if(input.userId == '11'){return null;}
      if(input.userId=='9')
      {
        return {userId:"9",role:"ADMIN"};
      }
  }
  async findUniquePermission(@Param("id") id:string) {
      if(id=='11'){return [];}
      
    return [{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}];
  }
  async findAllPermissions(@Param("id") id:string)
  {
    if(id=='9')
    {
        return {userPermissions: [
            {
              userId: '9',
              permissionType: 'CREATE',
              permissionCategory: 'PROFILE',
              permissionTenant: 'USER'
            }
          ],
          rolePermissions: [
            {
              role: 'ADMIN',
              permissionType: 'CREATE',
              permissionCategory: 'PROFILE',
              permissionTenant: 'USER'
            }
          ]};
    }
  }
  async addUniquePermission(@Param() idasking:string,data: Prisma.UserPermissionsUncheckedCreateInput):Promise<UserPermissions|null> {
    if(data.userId=='11'){return null;}
    if(idasking== '10')
    {
        
      return null;
  
    }else
    {
        if(idasking== '9')
        {
            return {userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"};
        }
    }
       
  }
  async updateUniquePermission(@Param() askingId:string, 
    params:{where:Prisma.UserPermissionsWhereUniqueInput;
      data: Prisma.UserPermissionsUncheckedUpdateInput;}){
        if(params.where.userId_permissionType_permissionCategory_permissionTenant.userId=='11'){return null;}
        if(params.data.userId=='11'){return null;}
        if(askingId== '10')
        {
            
          return null;
      
        }else
        {
            if(askingId== '9')
            {
                return {userId: "10",permissionType: "CREATE",permissionCategory:"COMPANY",
                permissionTenant:"USER"};
            }
        }
        
      }
      async deleteUniquePermission(@Param() askingId:string, 
      where:Prisma.UserPermissionsWhereUniqueInput){
          if(where.userId_permissionType_permissionCategory_permissionTenant.userId=='11'){return null;}
        if(askingId== '10')
        {
            
          return null;
      
        }else
        {
            if(askingId== '9')
            {
                return {userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
                permissionTenant:"USER"};
            }
        }
         
          
        }
  async addUserRole(@Param() askingId:string, data:Prisma.UserRoleUncheckedCreateInput)
  {
    if(data.userId=='11'){return null;}
    if(askingId== '10')
        {
            
          return null;
      
        }else
        {
            if(askingId== '9')
            {
                return {userId:"10",role:"STUDENT"};
            }
        }
    
  }
  async updateUserRole(@Param() idasking:string, params: {where: Prisma.UserRoleWhereUniqueInput; 
    data: Prisma.UserRoleUncheckedUpdateInput;}) {
        if(params.data.userId=='11'){return null;}
        if(params.where.userId_role.userId=='11'){return null;}
    if(idasking== '10')
        {
            
          return null;
      
        }else
        {
            if(idasking== '9')
            {
                return {userId:"10",role:"STUDENT"};
            }
        }
  }
    async deleteUserRole(@Param() idasking:string, where: Prisma.UserRoleWhereUniqueInput) {
        if(where.userId_role.userId=='11'){return null;}
    if(idasking== '10')
        {
            
          return null;
      
        }else
        {
            if(idasking== '9')
            {
                return {userId:"10",role:"USER"};
            }
        }
    }
    async addRolePermissions(@Param() idasking:string, data:Prisma.RolePermissionsCreateInput) {
        if(data.role=='SUSPENDED'){return null;}
        if(idasking== '10')
            {
                
              return null;
          
            }else
            {
                if(idasking== '9')
                {
                    return {role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"NONE"};
                }
            }
    }
    async updateRolePermissions(@Param() idasking:string, params:{where: Prisma.RolePermissionsWhereUniqueInput;
      data:Prisma.RolePermissionsUpdateInput;}) {
        if(params.data.role=='SUSPENDED'){return null;}
        if(params.where.role_permissionType_permissionCategory_permissionTenant.role=='SUSPENDED'){return null;}
        if(idasking== '10')
            {
                
              return null;
          
            }else
            {
                if(idasking== '9')
                {
                    return {role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"COUNT"};
                }
    }
}
    async deleteRolePermissions(@Param() askingId:string, 
      where:Prisma.RolePermissionsWhereInput){
        if(where.role=='SUSPENDED'){return null;}
        if(askingId== '10')
            {
                
              return null;
          
            }else
            {
                if(askingId== '9')
                {
                    return {role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"COUNT"};
                }
          
          
        }
    }

    

}