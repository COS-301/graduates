import {Companyauthorization} from './api-authorization-repository-company';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationCompany,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
test('company check company story', async () => {
    const data = new Companyauthorization()
    const authCompany = new authorizationCompany();
    authCompany.askingId = "u19014725";
    authCompany.u_permission.permission_t = "VIEW";
    authCompany.u_permission.permission_category = "STORY";
    authCompany.u_permission.permission_tenant = "COMPANY";
    authCompany.r_permission.permission_t = "VIEW";
    authCompany.r_permission.permission_category = "STORY";
    authCompany.r_permission.permission_tenant = "COMPANY";
    const u_permission = new user_permissions();
    u_permission.permission_t = "VIEW";
    u_permission.permission_category = "STORY";
    u_permission.permission_tenant = "COMPANY";
    const r_permission = new role_permission();
    r_permission.permission_t = "VIEW";
    r_permission.permission_category = "STORY";
    r_permission.permission_tenant = "COMPANY";
     const call = await data.findCompanyAutherization("u19014725",u_permission,r_permission);
    expect(call).toMatchObject(authCompany);
  });
  
test('company add user to company', async () => {
  const data = new Companyauthorization()
  const authCompany = new authorizationCompany();
  authCompany.askingId = "u19014725";
  authCompany.targetId = "u88888888";
  authCompany.u_permission.permission_t = "CREATE";
  authCompany.u_permission.permission_category = "USER";
  authCompany.u_permission.permission_tenant = "COMPANY";
  authCompany.r_permission.permission_t = "CREATE";
  authCompany.r_permission.permission_category = "USER";
  authCompany.r_permission.permission_tenant = "COMPANY";
  const u_permission = new user_permissions();
  u_permission.permission_t = "CREATE";
  u_permission.permission_category = "USER";
  u_permission.permission_tenant = "COMPANY";
  const r_permission = new role_permission();
  r_permission.permission_t = "CREATE";
  r_permission.permission_category = "USER";
  r_permission.permission_tenant = "COMPANY";
   const call = await data.findCompanyauthorizationUser("u19014725","u88888888",u_permission,r_permission);
  expect(call).toMatchObject(authCompany);
});