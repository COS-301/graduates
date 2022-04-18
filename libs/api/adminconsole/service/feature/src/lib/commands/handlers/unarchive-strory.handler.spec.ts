import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { UnarchiveStroryHandler } from './unarchive-strory.handler';

describe('UnarchiveStroryHandler', () => {
  let prisma: PrismaService;
  it('should be defined', () => {
    expect(new UnarchiveStroryHandler(prisma)).toBeDefined();
    expect(new UnarchiveStroryHandler(prisma)).toBeTruthy();
  });
});
