import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { RemoveRoleHandler } from './remove-role.handler';

describe('RemoveRoleHandler', () => {
  let prisma: PrismaService;
  it('should be defined', () => {
    expect(new RemoveRoleHandler(prisma)).toBeDefined();
  });
});
