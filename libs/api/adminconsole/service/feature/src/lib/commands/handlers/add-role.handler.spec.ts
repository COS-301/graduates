import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { AddRoleHandler } from './add-role.handler';

describe('AddRoleHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new AddRoleHandler(prisma)).toBeDefined();
    expect(new AddRoleHandler(prisma)).toBeTruthy();
  });
});
