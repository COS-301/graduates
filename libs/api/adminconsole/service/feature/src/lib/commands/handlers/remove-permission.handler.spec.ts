import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { RemovePermissionHandler } from './remove-permission.handler';

describe('RemovePermissionHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new RemovePermissionHandler(prisma)).toBeDefined();
    expect(new RemovePermissionHandler(prisma)).toBeTruthy();
  });
});
