import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule} from '@nestjs/cqrs';
import { ApiRequestAccessResolver } from './api-request-access.resolver';
import { ApiRequestAccessService } from './api-request-access.service';
import { RequestAccessService } from '@graduates/api/request-access/service/feature';
import { RequestAccessRepository } from '@graduates/api-request-access-repository-feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

describe('ApiAccessStatusResolver', () => {
    let resolver: ApiRequestAccessResolver;
    
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CqrsModule],
            providers: [
                ApiRequestAccessResolver,
                ApiRequestAccessService,
                RequestAccessService,
                RequestAccessRepository,
                PrismaService,
            ],
          }).compile();

          resolver = module.get<ApiRequestAccessResolver>(ApiRequestAccessResolver);
    });

    it("should be null", async () => {
        const data = await resolver.requestAccess("", "1", "CV");
        expect(data).toBeNull();
    });

    it("should be null", async () => {
        const data = await resolver.requestAccess("45", "", "Capstone Project");
        expect(data).toBeNull();
    });
    
    it("should be null", async () => {
        const data = await resolver.requestAccess("72", "90", "");
        expect(data).toBeNull();
    });

    it("should be null", async () => {
        const data = await resolver.requestAccess("56", "92", "None Existant Item");
        expect(data).toBeNull();
    });

    it("should not be null", async () => {
        const data = await resolver.requestAccess("0", "1", "ACADEMIC_RECORD");
        expect(data).not.toBeNull();
    });

    it("should be equal to entity", async () => {
        const data = await resolver.requestAccess("92", "56", "CAPSTONE_PROJECT");
        expect(data).toEqual({userID: "56", companyID: "92", item: "CAPSTONE_PROJECT"});
    });
});