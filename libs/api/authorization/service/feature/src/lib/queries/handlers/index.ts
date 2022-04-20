import { GetEditPermissionHandler } from './get-edit-permissions.handler';
import { GetCompanyIdHandler } from './get-companyId-permissions.handler';
import { GetDeletePermissionHandler } from './get-delete-permissions.handler';
import { GetRoleQueryPermissionHandler } from './get-role-permissions.handler';
import { GetViewPermissionHandler } from './get-view-permissions.handler';

export const QueryHandlers = [
  GetEditPermissionHandler,
  GetDeletePermissionHandler,
  GetCompanyIdHandler,
  GetRoleQueryPermissionHandler,
  GetViewPermissionHandler,
];
