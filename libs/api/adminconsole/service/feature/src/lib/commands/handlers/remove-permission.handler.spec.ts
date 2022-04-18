// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { RemovePermissionHandler } from './remove-permission.handler';

describe('RemovePermissionHandler', () => {
  let prisma: Adminauthorization; 
  it('should be defined', () => {
    expect(new RemovePermissionHandler(prisma)).toBeDefined();
    expect(new RemovePermissionHandler(prisma)).toBeTruthy();
  });
});
