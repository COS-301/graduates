// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { GetPermissionsHandler } from './get-permissions.handler';

describe('GetPermissionsHandler', () => {
  let prisma: Adminauthorization; 
  it('should be defined', () => {
    expect(new GetPermissionsHandler(prisma)).toBeDefined();
    expect(new GetPermissionsHandler(prisma)).toBeTruthy();
  });
});
