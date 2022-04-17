import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { GetPermissionsHandler } from './get-permissions.handler';

describe('GetPermissionsHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new GetPermissionsHandler(prisma)).toBeDefined();
    expect(new GetPermissionsHandler(prisma)).toBeTruthy();
  });
});
