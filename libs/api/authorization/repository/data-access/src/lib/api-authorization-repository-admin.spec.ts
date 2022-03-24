
import {Adminauthorization} from './api-authorization-repository-admin';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationAdmin,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
test('admin add user', async () => {
    const data = new Adminauthorization()
    const authAdmin = new authorizationAdmin();
    authAdmin.askingId = "u19014725";
    authAdmin.u_permission.permission_t = "CREATE";
    authAdmin.u_permission.permission_category = "ALL";
    authAdmin.r_permission.permission_t = "CREATE";
    authAdmin.r_permission.permission_category = "ALL"
    const u_permission = new user_permissions();
    u_permission.permission_t = "CREATE";
    u_permission.permission_category = "ALL";
    const r_permission = new role_permission();
    r_permission.permission_t = "CREATE";
    r_permission.permission_category = "ALL";
     const call = await data.findAdminAtherization("u19014725",u_permission,r_permission);
    expect(call).toMatchObject(authAdmin);
  });
  
test('admin add user to company', async () => {
  const data = new Adminauthorization()
  const authAdmin = new authorizationAdmin();
  authAdmin.askingId = "u19014725";
  authAdmin.targetId = "u88888888";
  authAdmin.u_permission.permission_t = "CREATE";
  authAdmin.u_permission.permission_category = "ALL";
  authAdmin.u_permission.permission_tenant = "COMPANY";
  authAdmin.r_permission.permission_t = "CREATE";
  authAdmin.r_permission.permission_category = "ALL";
  authAdmin.r_permission.permission_tenant = "COMPANY";
  const u_permission = new user_permissions();
  u_permission.permission_t = "CREATE";
  u_permission.permission_category = "ALL";
  u_permission.permission_tenant = "COMPANY";
  const r_permission = new role_permission();
  r_permission.permission_t = "CREATE";
  r_permission.permission_category = "ALL";
  r_permission.permission_tenant = "COMPANY";
   const call = await data.findAdminauthorizationUser("u19014725","u88888888",u_permission,r_permission);
  expect(call).toMatchObject(authAdmin);
});
