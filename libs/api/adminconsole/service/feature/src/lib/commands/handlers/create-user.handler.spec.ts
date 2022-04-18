import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { CreateUserHandler } from './create-user.handler';

describe('CreateUserHandler', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new CreateUserHandler(prisma)).toBeDefined();
    expect(new CreateUserHandler(prisma)).toBeTruthy();
  });
});
