// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {Adminauthorization} from "../../../../../../../authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository"
import { RemoveRoleHandler } from './remove-role.handler';

describe('RemoveRoleHandler', () => {
  let prisma: Adminauthorization;
  it('should be defined', () => {
    expect(new RemoveRoleHandler(prisma)).toBeDefined();
  });
});
