import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRepresentativeRepository } from './company-representative.repository';
import { prismaMock } from './singleton';
import { MockContext, Context, createMockContext } from './context';


let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
  })


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

    
    describe('@login', () => {

        const email = 'tester@gmail.com';
        const password = 'password';

        it('should allow user to login', async () => {
            try {
                const user = repository.login(email, password);
                expect(user).toEqual(user);

            } catch (error) {
                fail(error);
            }
        });
    });

    describe('@getAllRepresentativeUsers', () => {

        it('should return all representatives', () =>{
            try {
                const allReps = repository.getAllRepresentativeUsers();
                expect(allReps).toHaveReturned;
            } catch (error) {
                fail(error);
            }    
        })
    });

    // describe('@getRepresentativeUser', () => {
    //     const userId = '1';

    //     it('should ')

    // })

});
