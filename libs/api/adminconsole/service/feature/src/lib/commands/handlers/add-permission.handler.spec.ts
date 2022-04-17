import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { AddPermissionHandler } from './add-permission.handler';

describe('AddPermissionHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new AddPermissionHandler(prisma)).toBeDefined();
    expect(new AddPermissionHandler(prisma)).toBeTruthy();
  });
});
