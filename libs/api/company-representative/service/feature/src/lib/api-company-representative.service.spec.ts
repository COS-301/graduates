import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';



describe('ApiCompanyRepresentativeService', () => {
  let service: ApiCompanyRepresentativeService;
  

  const manyUsers = [
    {
      id: "c1234",
      email: "ishe.dzingirai@gmail.com",
      password: "IamACSStudent@1",
      name: "Isheanesu Joseph Dzingirai",
      created: new Date(),
      validated: true, 
      suspended: false,
  
      UserRole: {
        
        role: "REPRESENTATIVE"
        
      },
  
      UserPermissions: {
        
        permissionCategory: "PROFILE",
        permissionTenant: "USER",
        permissionType: "ALL",
        
      },
  
      UserTag:[ 
        {
        
          tag: "Data Engineer at Consnet"
        },
        {
          tag: "www.ishe.dzingi.com"
        },
        {
          tag: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning."
        }
      ],
  
      UserSocialMedia:[{
            type: "TWITTER",
            link: "ishe@twitter.com"
          }, {
            type: "INSTAGRAM",
            link: "ishe@instagram.com"
          }, {
            type: "LINKEDIN",
            link: "linkedin.com/in/isheanesu-dzingirai-2952b9180"
          }, {
            type: "FACEBOOK",
            link: "ishe@facebook.com"
          },{
            type: "SNAPCHAT",
            link: "ishe@snapchat.com"
          },{
            type: "GITHUB",
            link: "zenthon@github.com"
          },
     ],
      
  
      UserLocation: {
        
        location: "Hatfield, Gauteng, 0028"
        
      },
  
      UserContactNumber: {
        
        number: "0724545654"
        
      },
  
      UserExperience: {
        
          experience: "Worked for Universtity of Pretoria as a Teaching Assistant."
        
      }
     },
   {
      id: "44",
      email: "ham@gmail.com",
      password: "StillIRise@1",
      name: "Lewis Hamilton",
      created: new Date(),
      validated: true, 
      suspended: false,
  
      UserRole: {
        
        role: "REPRESENTATIVE"
        
      },
  
      UserPermissions: {
        
        permissionCategory: "PROFILE",
        permissionTenant: "USER",
        permissionType: "ALL",
        
      },
  
      UserTag:[ 
        {
        
          tag: "Mercedes Driver"
        },
        {
          tag: "www.HAM.com"
        },
        {
          tag: "I don't eat meat"
        }
      ],
  
      UserSocialMedia:[
         {
            type: "TWITTER",
            link: "LH44@twitter.com"
          }
     ],
      
  
      UserLocation: {
        
        location: "Monaco"
        
      },
  
      UserContactNumber: {
        
        number: "0724545654"
        
      },
  
      UserExperience: {
        
        experience: "I've worked with Ferrnando Alonso"
        
      }
     }
   ,
   {
    id: "4",
    email: "Lando@gmail.com",
    password: "noza@1",
    name: "Lando Norris",
    created: new Date(),
    validated: true, 
    suspended: false,

    UserRole: {
      
      role: "REPRESENTATIVE"
      
    },

    UserPermissions: {
      
      permissionCategory: "PROFILE",
      permissionTenant: "USER",
      permissionType: "ALL",
      
    },

    UserTag:[ 
      {
      
        tag: "Mclaren Driver"
      },
      {
        tag: "www.TeamQuadrant.com"
      },
      {
        tag: "I like Yellow"
      }
    ],

    UserSocialMedia:[{
          type: "TWITTER",
          link: "L4@twitter.com"
        }
   ],
    

    UserLocation: {
      
      location: "England, UK"
      
    },

    UserContactNumber: {
      
      number: "0724545654"
      
    },

    UserExperience: {
      
        experience: "Lol. None."
      
    }
   }

  ];

const oneUser = manyUsers[0];
const defaultUser=manyUsers[0];
const nameUpdateUser=manyUsers[0].name="John Riley";
const bioUpdateUser=manyUsers[0].UserTag[0][0]="I love goats";
const numberUpdateUser=manyUsers[0].UserContactNumber[0]="511-212";
const locationUpdateUser=manyUsers[0].UserLocation[0]="Burma";
const expirienceUpdateUser=manyUsers[0].UserExperience[0]="Catholic Church priests"


const mockDataBase = {
  handler: {
    findMany: jest.fn().mockResolvedValue(manyUsers),
    findUnique: jest.fn((id)=>oneUser),
    create: jest.fn().mockReturnValue(defaultUser),
    updateName: jest.fn((name)=>nameUpdateUser),
    updateBio: jest.fn((bio)=>bioUpdateUser),
    updateNumber:jest.fn((number)=>numberUpdateUser),
    updateLocation:jest.fn((location)=>locationUpdateUser),
    updateExpirience:jest.fn((expirience)=>expirienceUpdateUser),
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

  describe('createDefaultUser',()=>{

    it('should create a Default user', async()=>{

      const user=mockDataBase.handler.create();
      expect(user).toEqual(defaultUser);
      
    });
  })

  describe('update a user name',()=>{
    it('should return a json object with an updated name field', async ()=>{
      const user=mockDataBase.handler.updateName('John Riley');
      expect(user).toEqual(nameUpdateUser);
    });
  })

  describe('update a user bio',()=>{
    it('should return a json object with an updated bio field', async ()=>{
      const user=mockDataBase.handler.updateBio('I love goats');
      expect(user).toEqual(bioUpdateUser);
    });
  })

  describe('update a user number',()=>{
    it('should return a json object with an updated number field', async ()=>{
      const user=mockDataBase.handler.updateNumber('511-212');
      expect(user).toEqual(numberUpdateUser);
    });
  })

  describe('update a user location',()=>{
    it('should return a json object with an updated location field', async ()=>{
      const user=mockDataBase.handler.updateLocation('Burma');
      expect(user).toEqual(locationUpdateUser);
    });
  })

  describe('update a user Expirience',()=>{
    it('should return a json object with an updated Expirience field', async ()=>{
      const user=mockDataBase.handler.updateExpirience('Catholic Church priests');
      expect(user).toEqual(expirienceUpdateUser);
    });
  })

  


});
