import {Companyauthorization} from './api-authorization-repository-company';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {PermissionType,authorizationCompany,role_permission,user_permissions, PermissionCategory, PermissionTenant} from '../../../shared/src/lib/authorization-data-access.entity';
test('company check company story', async () => {
    const data = new Companyauthorization()
    const authCompany = new authorizationCompany();
    authCompany.askingId = "u19014725";
    authCompany.u_permission.permission_t = PermissionType.VIEW;
    authCompany.u_permission.permission_category = PermissionCategory.STORY;
    authCompany.u_permission.permission_tenant = PermissionTenant.COMPANY;
    authCompany.r_permission.permission_t = PermissionType.VIEW;
    authCompany.r_permission.permission_category = PermissionCategory.STORY;
    authCompany.r_permission.permission_tenant =  PermissionTenant.COMPANY;
    const u_permission = new user_permissions();
    u_permission.permission_t = PermissionType.VIEW;
    u_permission.permission_category = PermissionCategory.STORY;
    u_permission.permission_tenant = PermissionTenant.COMPANY;
    const r_permission = new role_permission();
    r_permission.permission_t = PermissionType.VIEW;
    r_permission.permission_category = PermissionCategory.STORY;
    r_permission.permission_tenant =  PermissionTenant.COMPANY;
     const call = await data.findCompanyAutherization("u19014725",u_permission,r_permission);
    expect(call).toMatchObject(authCompany);
  });
  
test('company add user to company', async () => {
  const data = new Companyauthorization()
  const authCompany = new authorizationCompany();
  authCompany.askingId = "u19014725";
  authCompany.targetId = "u88888888";
  authCompany.u_permission.permission_t = PermissionType.CREATE;
  authCompany.u_permission.permission_category = PermissionCategory.USER;
  authCompany.u_permission.permission_tenant = PermissionTenant.COMPANY;
  authCompany.r_permission.permission_t = PermissionType.CREATE;
  authCompany.r_permission.permission_category = PermissionCategory.USER;
  authCompany.r_permission.permission_tenant = PermissionTenant.COMPANY;
  const u_permission = new user_permissions();
  u_permission.permission_t = PermissionType.CREATE;
  u_permission.permission_category = PermissionCategory.USER;
  u_permission.permission_tenant = PermissionTenant.COMPANY;
  const r_permission = new role_permission();
  r_permission.permission_t = PermissionType.CREATE;
  r_permission.permission_category = PermissionCategory.USER;
  r_permission.permission_tenant = PermissionTenant.COMPANY;
   const call = await data.findCompanyauthorizationUser("u19014725","u88888888",u_permission,r_permission);
  expect(call).toMatchObject(authCompany);
});