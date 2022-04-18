// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { AddPermissionHandler } from './add-permission.handler';

describe('AddPermissionHandler', () => {
  let prisma: Adminauthorization; 
  it('should be defined', () => {
    expect(new AddPermissionHandler(prisma)).toBeDefined();
    expect(new AddPermissionHandler(prisma)).toBeTruthy();
  });
});
