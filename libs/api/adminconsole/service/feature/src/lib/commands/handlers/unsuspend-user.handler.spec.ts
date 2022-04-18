import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { UnsuspendUserHandler } from './unsuspend-user.handler';

describe('UnsuspendUserHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new UnsuspendUserHandler(prisma)).toBeDefined();
    expect(new UnsuspendUserHandler(prisma)).toBeTruthy();
  });
});
