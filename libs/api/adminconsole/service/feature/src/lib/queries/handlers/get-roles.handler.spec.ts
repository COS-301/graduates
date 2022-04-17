import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { GetRolesHandler } from './get-roles.handler';

describe('GetRolesHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new GetRolesHandler(prisma)).toBeDefined();
    expect(new GetRolesHandler(prisma)).toBeTruthy();
  });
});
