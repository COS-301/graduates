import {userAuthorization} from './api-authorization-repository-user';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {authorizationStudent,PermissionCategory,PermissionTenant,PermissionType,roletype,role_permission,user_permissions} from '../../../shared/src/lib/authorization-data-access.entity';
test('company check company story', async () => {
    const data = new userAuthorization()
    const authUser = new authorizationStudent();
    authUser.askingId = "u19014725";
    authUser.role = roletype.STUDENT;
    authUser.u_permission.permission_t = PermissionType.VIEW;
    authUser.u_permission.permission_category = PermissionCategory.STORY;
    authUser.u_permission.permission_tenant = PermissionTenant.COMPANY;
    authUser.r_permission.permission_t = PermissionType.VIEW;
    authUser.r_permission.permission_category = PermissionCategory.STORY;
    authUser.r_permission.permission_tenant = PermissionTenant.COMPANY;
    const u_permission = new user_permissions();
    u_permission.permission_t = PermissionType.VIEW;
    u_permission.permission_category = PermissionCategory.STORY;
    u_permission.permission_tenant = PermissionTenant.COMPANY;
    const r_permission = new role_permission();
    r_permission.permission_t = PermissionType.VIEW;
    r_permission.permission_category = PermissionCategory.STORY;
    r_permission.permission_tenant = PermissionTenant.COMPANY;
     const call = await data.findUserAuthorization("u19014725",u_permission,r_permission);
    expect(call).toMatchObject(authUser);
  });
  
test('company add user to company', async () => {
  const data = new userAuthorization()
  const authUser = new authorizationStudent();
  authUser.askingId = "u19014725";
  authUser.targetId = "u88888888";
  authUser.role = roletype.STUDENT;
  authUser.u_permission.permission_t = PermissionType.CREATE;
  authUser.u_permission.permission_category = PermissionCategory.USER;
  authUser.u_permission.permission_tenant = PermissionTenant.COMPANY;
  authUser.r_permission.permission_t =PermissionType.CREATE;
  authUser.r_permission.permission_category = PermissionCategory.USER;
  authUser.r_permission.permission_tenant = PermissionTenant.COMPANY;
  const u_permission = new user_permissions();
  u_permission.permission_t = PermissionType.CREATE;
  u_permission.permission_category = PermissionCategory.USER;
  u_permission.permission_tenant = PermissionTenant.COMPANY;
  const r_permission = new role_permission();
  r_permission.permission_t = PermissionType.CREATE;
  r_permission.permission_category = PermissionCategory.USER;
  r_permission.permission_tenant = PermissionTenant.COMPANY;
   const call = await data.findUserauthorizationUser("u19014725","u88888888",u_permission,r_permission);
  expect(call).toMatchObject(authUser);
});