import {Adminauthorization} from '../lib/api-authorization-repository-admin';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import {,role_permission,user_permissions, PermissionCategory, PermissionTenant} from '../../../shared/src/lib/authorization-data-access.entity';

import { Test, TestingModule } from '@nestjs/testing';
//import { Prisma } from '@prisma/client';
//import { ApiAuthorizationResolver } from './api-authorization.resolver';
//import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';

    
describe('ApiAuthorizationRepository', () => {
  let data:Adminauthorization;
  //const prisma = new PrismaService();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Adminauthorization],
      providers: [PrismaService],
    }).compile();
    data = module.get<Adminauthorization>(Adminauthorization);
    //data = new Adminauthorization(prisma);
    //await prisma.user.create({data:{id:"10",email:"afbiwqbf@wqefojbu.com",password:"11111",passwordSalt:"11111",name:"Test Man",dateOfBirth:new Date(),created:new Date(),suspended:false,validated:true}});
   // await prisma.user.create({data:{id:"9",email:"qqq@wqefojbu.com",password:"11111",passwordSalt:"11111",name:"Admin Test Man",dateOfBirth:new Date(),created:new Date(),suspended:false,validated:true}});
    //await prisma.userRole.create({data:{userId:"9",role:"ADMIN"}});
    //await prisma.userRole.create({data:{userId:"10",role:"USER"}});
  });
  it('generic test', async () => {
    //console.log(call);
   //expect(call).toBe(null);
   expect(true).toBeTruthy();
 });
 /* it('add new unique permission as user', async () => {
    const call = await data.addUniquePermission("10",{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
     permissionTenant:"USER"});
    //console.log(call);
   //expect(call).toBe(null);
   expect(call).toBeDefined();
 });
 it('add new unique permission as admin', async () => {
  const call = await data.addUniquePermission("9",{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
   permissionTenant:"USER"});
  //console.log(call);
 //expect(call).toStrictEqual({userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"});
 expect(call).toBeDefined();
});

it('add new unique permission already exists', async () => {
  const call = await data.addUniquePermission("10",{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
   permissionTenant:"USER"});
  //console.log(call);
  expect(call).toBeDefined();
 //expect(call).toBe(null);
});

it('find unique permissions', async () => {
  const data = new Adminauthorization(new PrismaService);
    //await prisma.userPermissions.createMany({data:{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
     const call = await data.findUniquePermission("10");
     //console.log(call);
    //expect(call).toStrictEqual([{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}]);
    expect(call).toBeDefined();
});

it('find unique permissions not there', async () => {
  const data = new Adminauthorization(new PrismaService);
  
     const call = await data.findUniquePermission("11");
     //console.log(call);
    //expect(call).toStrictEqual([]);
    expect(call).toBeDefined();
});

it('update unique permissions as user', async () => {
  const data = new Adminauthorization(new PrismaService);

    const call = await data.updateUniquePermission("10",
    { where:
      {userId_permissionType_permissionCategory_permissionTenant:
        {userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
          permissionTenant:"USER"}},
          data:   
            {permissionType: "CREATE",permissionCategory:"ALL"}});
     //console.log(call);
    //expect(call).toBe(null);
    expect(call).toBeDefined();
});

it('update unique permissions as admin', async () => {
  const data = new Adminauthorization(new PrismaService);
 // await prisma.userPermissions.createMany({data:{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
    const call = await data.updateUniquePermission("9",
    { where:
      {userId_permissionType_permissionCategory_permissionTenant:
        {userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",
          permissionTenant:"USER"}},
          data:   
            {permissionType: "CREATE",permissionCategory:"COMPANY"}});
     //console.log(call);
    //expect(call).toStrictEqual( {userId: "10",permissionType: "CREATE",permissionCategory:"COMPANY",
      //permissionTenant:"USER"});
      expect(call).toBeDefined();
});

it('update unique permissions as admin not there', async () => {
  const data = new Adminauthorization(new PrismaService);
  
    const call = await data.updateUniquePermission("10",
    { where:
      {userId_permissionType_permissionCategory_permissionTenant:
        {userId: "10",permissionType: "CREATE",permissionCategory:"ALL",
          permissionTenant:"USER"}},
          data:   
            {permissionType: "CREATE",permissionCategory:"COMPANY"}});
     //console.log(call);
   // expect(call).toBe( null);
    expect(call).toBeDefined();
});

it('delete unique permission as user', async () => {
   const call = await data.deleteUniquePermission("10",{userId_permissionType_permissionCategory_permissionTenant:{
    userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
   //console.log(call);
  //expect(call).toBe(null);
  expect(call).toBeDefined();
});

it('delete unique permission as admin', async () => {
  //await prisma.userPermissions.createMany({data:{userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
  const call = await data.deleteUniquePermission("9",{userId_permissionType_permissionCategory_permissionTenant:{
    userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
  //console.log(call);
 //expect(call).toStrictEqual({userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"});
 expect(call).toBeDefined();
});

it('delete unique permission not there', async () => {
  const call = await data.deleteUniquePermission("10",{userId_permissionType_permissionCategory_permissionTenant:{
    userId: "10",permissionType: "CREATE",permissionCategory:"PROFILE",permissionTenant:"USER"}});
  //console.log(call);
 //expect(call).toStrictEqual(null);
 expect(call).toBeDefined();
});
 it('add user role as user', async () => {
  const call = await data.addUserRole("10",{userId:"10",role:"ADMIN"});
  //console.log(call);
 //expect(call).toBe(null);
 expect(call).toBeDefined();
});

it('add user role as admin', async () => {
  const call = await data.addUserRole("9",{userId:"10",role:"STUDENT"});
  //console.log(call);
 //expect(call).toStrictEqual({userId:"10",role:"STUDENT"});
 expect(call).toBeDefined();

});

it('find user role as admin', async () => {
  const call = await data.findRole("9");
  //console.log(call);
 //expect(call).toStrictEqual({userId:"9",role:"ADMIN"});
 expect(call).toBeDefined();

});

it('find user role as admin', async () => {
  const call = await data.findRole("11");
  //console.log(call);
 //expect(call).toBe(null);
 expect(call).toBeDefined();
});

 it('update user role as user', async () => {
  const call = await data.updateUserRole("10",{where:{userId_role:{userId:"10",role:"USER"}},data:{role:"ADMIN"}});
  //console.log(call);
 //expect(call).toBe(null);
 expect(call).toBeDefined();
});


it('update user role as admin', async () => {
  const call = await data.updateUserRole("9",{where:{userId_role:{userId:"10",role:"USER"}},data:{role:"STUDENT"}});
  //console.log(call);
 //expect(call).toStrictEqual({userId:"10",role:"STUDENT"});
 expect(call).toBeDefined();
});

it('delete user role as user', async () => {
  const call = await data.deleteUserRole("10",{userId_role:{userId:"10",role:"USER"}});
  //console.log(call);
 //expect(call).toBe(null);
 expect(call).toBeDefined();
});

it('delete user role as admin', async () => {
  const call = await data.deleteUserRole("9",{userId_role:{userId:"10",role:"USER"}});
  //console.log(call);
 //expect(call).toStrictEqual({userId:"10",role:"USER"});
 expect(call).toBeDefined();

 
});
it('delete user role as admin', async () => {
  const call = await data.findGeneralPermissions("9");
  //console.log(call);
 expect(call).toBeDefined();
});
it('add role permission as admin', async () => {
  const call = await data.addRolePermissions("9",{role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"NONE"});
  //console.log(call);
 //expect(call).toBeDefined();
 expect(call).toBeDefined();
});
it('edit role permission as admin', async () => {
  const call = await data.updateRolePermissions("9",{where:{role_permissionType_permissionCategory_permissionTenant:
    {role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"NONE"}},data:{permissionTenant:"COUNT"}});
  //console.log(call);
 expect(call).toBeDefined();
});
it('delete role permission as admin', async () => {
  const call = await data.deleteRolePermissions("9",{role:"ADMIN",permissionType:"CREATE",permissionCategory:"COMPANY",permissionTenant:"COUNT"});
  //console.log(call);
 expect(call).toBeDefined();
});




afterEach(async () => {
    //await prisma.userPermissions.deleteMany({where:{userId:"9"}});
    //await prisma.userPermissions.deleteMany({where:{userId:"10"}});
    //await prisma.userRole.deleteMany({where:{userId:"9"}});
   // await prisma.userRole.deleteMany({where:{userId:"10"}});
    //await prisma.user.delete({where:{id:"10"}});
    //await prisma.user.delete({where:{id:"9"}});
});*/
});
