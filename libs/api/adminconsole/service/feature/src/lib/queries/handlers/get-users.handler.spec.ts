import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { GetUsersHandler } from './get-users.handler';

describe('GetUsersHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new GetUsersHandler(prisma)).toBeDefined();
    expect(new GetUsersHandler(prisma)).toBeTruthy();
  });
});
