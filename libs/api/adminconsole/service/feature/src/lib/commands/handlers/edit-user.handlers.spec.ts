import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { EditUserHandlers } from './edit-user.handlers';

describe('EditUserHandlers', () => {
  let prisma: PrismaService; 
  it('should be defined', () => {
    expect(new EditUserHandlers(prisma)).toBeDefined();
    expect(new EditUserHandlers(prisma)).toBeTruthy();
  });
});
