import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from "@prisma/client";

import { CompanyRepresentativeRepository } from './company-representative.repository';

import { prismaMock } from './singleton';

describe('CompanyRepresentativeRepository', () => {

    let repository: CompanyRepresentativeRepository;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CompanyRepresentativeRepository,
                { provide: PrismaService, useValue: prismaMock},
            ],
        }).compile();

        repository = module.get<CompanyRepresentativeRepository>(CompanyRepresentativeRepository);
    });

    it('Should be defined', async () => {
      expect(repository).toBeDefined();
    });

    //Write Tests Below

});