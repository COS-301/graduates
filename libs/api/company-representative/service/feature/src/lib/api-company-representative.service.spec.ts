import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';


describe('ApiCompanyRepresentativeService', () => {
  let service: ApiCompanyRepresentativeService;
  let prisma: PrismaService;

  const manyUsers = [
    {   id:'007',
		    email:"james@gmail.com",
        password:"herMajesty",
        passwordSalt:"the queen",
        name:"James Bond",
        dateOfBirth:"2018-12-10 13:45:00.000",
        companyId:"250",
        created:"2018-12-10 13:45:00.000",
        suspended:true,
        validated:false},
    {   id:'009',
		    email:"Gordan@gmail.com",
        password:"gcpd",
        passwordSalt:"Barbra",
        name:"James Gordon",
        dateOfBirth:"2018-12-10 13:45:00.000",
        companyId:"226",
        created:"2018-12-10 13:45:00.000",
        suspended:true,
        validated:false },
    {
        id:'010',
		    email:"tyler@gmail.com",
        password:"rocky",
        passwordSalt:"jayden queen",
        name:"Tyler the creator",
        dateOfBirth:"2018-12-10 13:45:00.000",
        companyId:"214",
        created:"2018-12-10 13:45:00.000",
        suspended:true,
        validated:false },
  ];

const oneUser = manyUsers[0];

const mockDataBase = {
  handler: {
    findMany: jest.fn().mockResolvedValue(manyUsers),
    findUnique: jest.fn((id)=>oneUser),
    create: jest.fn().mockReturnValue(oneUser),
    update: jest.fn().mockResolvedValue(oneUser),
    delete: jest.fn().mockResolvedValue(oneUser),
  },
};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CqrsModule],
      providers: [ApiCompanyRepresentativeService,QueryBus,CommandBus,{
        provide: PrismaService,
        useValue: mockDataBase
    }],
    }).compile();

    service = module.get<ApiCompanyRepresentativeService>(ApiCompanyRepresentativeService);
    prisma = module.get<PrismaService>(PrismaService);
    

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of user objects', async () => {
      const users = await mockDataBase.handler.findMany();
      expect(users).toEqual(manyUsers);
    });
  });

  describe('getOne', () => {
    it('should get a single user via the unique Id', async () => {
      const user=mockDataBase.handler.findUnique('007');
      expect(user).toEqual(oneUser);
    });
  });
});
