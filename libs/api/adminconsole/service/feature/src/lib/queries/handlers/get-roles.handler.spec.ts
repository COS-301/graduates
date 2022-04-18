// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { GetRolesHandler } from './get-roles.handler';

describe('GetRolesHandler', () => {
  let prisma: Adminauthorization; 
  it('should be defined', () => {
    expect(new GetRolesHandler(prisma)).toBeDefined();
    expect(new GetRolesHandler(prisma)).toBeTruthy();
  });
});
