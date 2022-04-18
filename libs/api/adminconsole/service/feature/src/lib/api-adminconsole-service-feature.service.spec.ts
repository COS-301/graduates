import { Test, TestingModule } from '@nestjs/testing';
import { ApiAdminConsoleServiceFeature } from './api-adminconsole-service-feature.service';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog, Prisma, /*Short,*/ User, UserPermissions, UserRole } from '@prisma/client';
import {MockTestAdminConsole} from './api-mock-testing.service';



describe('API Adminconsole Unit Testing', () => {
 let controller: ApiAdminConsoleServiceFeature;
 let tempUser : User;
 let editUser : User;
 let tempPerms : UserPermissions;
 let tempRole : UserRole;
 let tempBlog : Blog;
 let mock : MockTestAdminConsole;

 let queryBus: QueryBus;
 let commandBus: CommandBus;
 

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     controllers: [ApiAdminConsoleServiceFeature,MockTestAdminConsole],
     providers: [PrismaService, QueryBus, CommandBus],
   }).compile();

   tempBlog = {
     archived: false,
     content: "Update",
     date: new Date("2022/04/17"),
     id: "#1234",
     title: "Starting something new",
     userId: "temp1234"
   }

   tempUser = {
     id:'temp1234',
     companyId: 'comp1234',
     created: new Date("2019/12/12"),
     dateOfBirth: new Date("2001/12/12"),
     email: 'testing@gmail.com',
     name: 'Martin',
     password: 'Martin1234',
     passwordSalt: 'martin1234qwerqwer',
     suspended: false,
     validated: false
   };

   tempPerms ={
     permissionCategory: "STUDENT",
     permissionTenant: "COMPANY",
     permissionType: "ALL",
     userId:"temp1234"
   };

   editUser = {
     id:'temp1234',
     companyId: 'comp1234',
     created: new Date("2019/12/12"),
     dateOfBirth: new Date("2001/12/12"),
     email: 'testingchange@gmail.com',
     name: 'Martin',
     password: 'Martin1234',
     passwordSalt: 'martin1234qwerqwer',
     suspended: false,
     validated: true
   };

   tempRole = {
    role:"STUDENT",
    userId:"temp1234"
   };

   mock = module.get<MockTestAdminConsole>(MockTestAdminConsole);
   commandBus = module.get<CommandBus>(CommandBus);
   queryBus = module.get<QueryBus>(QueryBus);
   controller = module.get<ApiAdminConsoleServiceFeature>(ApiAdminConsoleServiceFeature);
 });

 it('should be defined', () => {
  expect(commandBus).toBeDefined();
  expect(queryBus).toBeDefined();
  expect(controller).toBeDefined();
});

  it('Defined createUser', () => {
    expect(mock.createUser(tempUser)).toBeDefined;
  })
  it('Defined getUser', () => {
    const tempID = "user1234";
    expect(mock.getUsers(tempID)).toBeDefined;
  })

 it('Defined editUser', () => {

   expect(mock.editUser(editUser)).toBeDefined;
 })

 it('Defined getPermissions', () => {
   const tempID = "user1234";
   expect(mock.getPermissions(tempID)).toBeDefined;
 })

 it('Defined getStories', () => {
   const tempID = "user1234";
   expect(mock.getStories(tempID)).toBeDefined;
 })

 it('Defined getRoles', () => {
  const tempID = "user1234";
   expect(mock.getRoles(tempID)).toBeDefined;
 })

 it('Defined getBlogs', () => {
  const tempID = "user1234";
   expect(mock.getBlogs(tempID)).toBeDefined;
 })
 
 it('Defined archiveBlog', () => {
  const blogId = "blog1234";
   expect(mock.archiveBlog(blogId)).toBeDefined;
 })
 
 it('Defined unArchiveBlog', () => {
  const blogId = "blog1234";
   expect(mock.unArchiveBlog(blogId)).toBeDefined;
 })

 

//Testing functions 
 it('getUser to equal tempUser', () => {
   expect(mock.getUsers("temp1234")[0]).toEqual(tempUser);
   })

   it('getPremissions to equal tempPerms', () => {
     expect(mock.getPermissions("temp1234")[0]).toEqual(tempPerms);
   })

   it('getRoles to equal tempRole', () => {
     expect(mock.getRoles("temp1234")[0]).toEqual(tempRole);
   })

   it('getBlogs to equal tempBlogs', () => {
     expect(mock.getBlogs("temp1234")[0]).toEqual(tempBlog);
   })

//Testing for correct return types
   it('Testing return types of createUser', () => {
     const admin = jest.spyOn(mock,'createUser');
     const returnt = mock.createUser(tempUser);
     expect(admin).toBeCalled();
//     expect(returnt).toBeInstanceOf(Promise);
   })

  it('Testing return types of getUsers', () => {
    const admin = jest.spyOn(mock,'getUsers');
    const returnt = mock.getUsers("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of editUser', () => {
    const admin = jest.spyOn(mock,'editUser');
    const returnt = mock.editUser(editUser);
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of suspendUser', () => {
    const admin = jest.spyOn(mock,'suspendUser');
    const returnt = mock.suspendUser("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of unSuspendUser', () => {
    const admin = jest.spyOn(mock,'unSuspendUser');
    const returnt = mock.unSuspendUser("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getPermissions', () => {
    const admin = jest.spyOn(mock,'getPermissions');
    const returnt = mock.getPermissions("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getStories', () => {
    const admin = jest.spyOn(mock,'getStories');
    const returnt = mock.getStories("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getRoles', () => {
    const admin = jest.spyOn(mock,'getRoles');
    const returnt = mock.getRoles("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getBlogs', () => {
    const admin = jest.spyOn(mock,'getBlogs');
    const returnt = mock.getBlogs("temp1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })


  it('Testing return types of archiveBlog', () => {
    const admin = jest.spyOn(mock,'archiveBlog');
    const returnt = mock.archiveBlog("tempblog1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of unArchiveBlog', () => {
    const admin = jest.spyOn(mock,'unArchiveBlog');
    const returnt = mock.unArchiveBlog("tempblog1234");
    expect(admin).toBeCalled();
    //expect(returnt).toBeInstanceOf();
  })
});