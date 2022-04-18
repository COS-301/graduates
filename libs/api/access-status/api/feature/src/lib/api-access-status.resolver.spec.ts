import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule} from '@nestjs/cqrs';
import { ApiAccessStatusResolver } from './api-access-status.resolver';
import { AccessStatusService } from '@graduates/api/access-status/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { AccessStatusRepository } from '@graduates/api/access-status/repository/feature';

describe('ApiAccessStatusResolver', () => {
    let resolver: ApiAccessStatusResolver;
    
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CqrsModule],
            providers: [
                ApiAccessStatusResolver,
                AccessStatusService,
                AccessStatusRepository,
                PrismaService
            ],
          }).compile();

          resolver = module.get<ApiAccessStatusResolver>(ApiAccessStatusResolver);
    });

    it("should be null", async () => {
        const data = await resolver.status("", "1");
        expect(data).toBeNull();
    });

    // it("should not be null", async () => {
    //     const data = await resolver.status("0", "1");
    //     expect(data).not.toBeNull();
    // });

    // it("should had length 5", async () => {
    //     const data = await resolver.status("0", "1");
    //     expect(data.length).toEqual(5);
    // });

    // it("should be equal to entity", async () => {
    //     const data = await resolver.status("0", "42");
    //     expect(data).toEqual([
    //         {item: "CV", accessStatus: "Pending"},
    //         {item: "Transcript", accessStatus: "Private"},
    //         {item: "Academic Record", accessStatus: "Private"},
    //         {item: "Certificates", accessStatus: "Private"},
    //         {item: "Capstone Project", accessStatus: "Private"},
    //     ]);
    // });
});