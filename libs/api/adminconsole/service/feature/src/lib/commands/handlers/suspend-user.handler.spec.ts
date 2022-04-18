import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { SuspendUserHandler } from './suspend-user.handler';

describe('SuspendUserHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new SuspendUserHandler(prisma)).toBeDefined();
    expect(new SuspendUserHandler(prisma)).toBeTruthy();
  });
});
