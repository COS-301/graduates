// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { AddRoleHandler } from './add-role.handler';

describe('AddRoleHandler', () => {
  let prisma: Adminauthorization; 
  it('should be defined', () => {
    expect(new AddRoleHandler(prisma)).toBeDefined();
    expect(new AddRoleHandler(prisma)).toBeTruthy();
  });
});
