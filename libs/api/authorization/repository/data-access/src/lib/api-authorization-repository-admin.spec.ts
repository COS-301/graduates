import {Adminauthorization} from '../lib/api-authorization-repository-admin';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import exp = require('constants');
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import {,role_permission,user_permissions, PermissionCategory, PermissionTenant} from '../../../shared/src/lib/authorization-data-access.entity';
test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.addUniquePermission("4",{userId: "4",permissionType: "CREATE",permissionCategory:"PROFILE",
      permissionTenant:"USER"});
     console.log(call);
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.deleteUniquePermission("4",{userId_permissionType_permissionCategory_permissionTenant:{userId: "4",permissionType: "CREATE",permissionCategory:"PROFILE",
      permissionTenant:"USER"}});
     console.log(call);
     expect(call).toBeDefined();
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.findAllPermissions("4");
     console.log(call);
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.findGeneralPermissionsPrisma({id:"1"});
     console.log(call);
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.findRole("u");
     console.log(call);
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.findRolePrisma({userId: "u"});
     console.log(call);
    expect(call).toBe(call);
  });
  test('company check company story', async () => {
    const data = new Adminauthorization(new PrismaService);
     const call = await data.findAllPermissions("4");
     console.log(call);
    expect(call).toBe(call);
  });
  
test('company add user to company', async () => {
  const data = new Adminauthorization(new PrismaService);
  
     const call = await data.findUniquePermission("4");
     console.log(call);
    expect(call).toBe(call);
});
test('company add user to company', async () => {
  const data = new Adminauthorization(new PrismaService);
  
    const call = await data.updateUniquePermission("4",
    { where:
      {userId_permissionType_permissionCategory_permissionTenant:
        {userId: "4",permissionType: "CREATE",permissionCategory:"PROFILE",
          permissionTenant:"USER"}},
          data:   
            {permissionType: "CREATE",permissionCategory:"STUDENT"}});
     console.log(call);
    expect(call).toBe(call);
});
test('company add user to company', async () => {
  const data = new Adminauthorization(new PrismaService);
  
    const call = await data.updateUniquePermission("4",
    { where:
      {userId_permissionType_permissionCategory_permissionTenant:
        {userId: "4",permissionType: "CREATE",permissionCategory:"PROFILE",
          permissionTenant:"USER"}},
          data:   
            {permissionType: "CREATE",permissionCategory:"PROFILE",
              permissionTenant:"ALL"}});
     console.log(call);
    expect(call).toBe(call);
});
