import { ApiCompanyRepresentativeService } from '@graduates/api/company-representative/service/feature';
import { Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyRepresentativeResolver } from './api-company-representative.resolver';

describe('ApiCompanyRepresentativeResolver', () => {
  let resolver: ApiCompanyRepresentativeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyRepresentativeResolver, ApiCompanyRepresentativeService,QueryBus,CommandBus],
    }).compile();

    resolver = module.get<ApiCompanyRepresentativeResolver>(ApiCompanyRepresentativeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
