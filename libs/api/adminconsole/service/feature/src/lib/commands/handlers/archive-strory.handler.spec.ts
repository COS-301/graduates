import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ArchiveStroryHandler } from './archive-strory.handler';

describe('ArchiveStroryHandler', () => {
  let prisma: PrismaService
  it('should be defined', () => {
    expect(new ArchiveStroryHandler(prisma)).toBeDefined();
    expect(new ArchiveStroryHandler(prisma)).toBeTruthy();
  });
});
