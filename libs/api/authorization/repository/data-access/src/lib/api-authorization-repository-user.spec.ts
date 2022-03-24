import {userAuthorization} from './api-authorization-repository-user';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationStudent,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
test('company check company story', async () => {
    const data = new userAuthorization()
    const authUser = new authorizationStudent();
    authUser.askingId = "u19014725";
    authUser.role = "STUDENT";
    authUser.u_permission.permission_t = "VIEW";
    authUser.u_permission.permission_category = "STORY";
    authUser.u_permission.permission_tenant = "COMPANY";
    authUser.r_permission.permission_t = "VIEW";
    authUser.r_permission.permission_category = "STORY";
    authUser.r_permission.permission_tenant = "COMPANY";
    const u_permission = new user_permissions();
    u_permission.permission_t = "VIEW";
    u_permission.permission_category = "STORY";
    u_permission.permission_tenant = "COMPANY";
    const r_permission = new role_permission();
    r_permission.permission_t = "VIEW";
    r_permission.permission_category = "STORY";
    r_permission.permission_tenant = "COMPANY";
     const call = await data.findUserAuthorization("u19014725",u_permission,r_permission);
    expect(call).toMatchObject(authUser);
  });
  
test('company add user to company', async () => {
  const data = new userAuthorization()
  const authUser = new authorizationStudent();
  authUser.askingId = "u19014725";
  authUser.targetId = "u88888888";
  authUser.role = "STUDENT";
  authUser.u_permission.permission_t = "CREATE";
  authUser.u_permission.permission_category = "USER";
  authUser.u_permission.permission_tenant = "COMPANY";
  authUser.r_permission.permission_t = "CREATE";
  authUser.r_permission.permission_category = "USER";
  authUser.r_permission.permission_tenant = "COMPANY";
  const u_permission = new user_permissions();
  u_permission.permission_t = "CREATE";
  u_permission.permission_category = "USER";
  u_permission.permission_tenant = "COMPANY";
  const r_permission = new role_permission();
  r_permission.permission_t = "CREATE";
  r_permission.permission_category = "USER";
  r_permission.permission_tenant = "COMPANY";
   const call = await data.findUserauthorizationUser("u19014725","u88888888",u_permission,r_permission);
  expect(call).toMatchObject(authUser);
});