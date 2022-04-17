import { Test, TestingModule } from '@nestjs/testing';
import { ApiAdminConsoleServiceFeature } from './api-adminconsole-service-feature.service';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Blog, /*Prisma,*/ Short, User, UserPermissions, UserRole } from '@prisma/client';



describe('API Adminconsole Unit Testing', () => {
 let controller: ApiAdminConsoleServiceFeature;
 let tempUser : User;
 let editUser : User;
 let tempPerms : UserPermissions;
 let tempRole : UserRole;
 let tempBlog : Blog;
 let tempStory: Short;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     controllers: [ApiAdminConsoleServiceFeature],
     providers: [PrismaService],
   }).compile();

   tempBlog = {
     archived: false,
     content: "Update",
     date: new Date("2022/04/17"),
     id: "#1234",
     title: "Starting something new",
     userId: "temp1234"
   }

   tempStory = {
     id: "#1234",
     userId: "temp1234",
     description: "MyStory",
     link: "www.cs.up.ac.za/story/#1234",
     thumbnail: "",
     datePosted: new Date("2022/04/17"),
     archived: false
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
   controller = module.get<ApiAdminConsoleServiceFeature>(ApiAdminConsoleServiceFeature);
 });


 it('Defined createUser', () => {
   expect(controller.createUser(tempUser)).toBeDefined;
 })
 it('Defined getUser', () => {
   const tempID = "user1234";
   expect(controller.getUsers(tempID)).toBeDefined;
 })

 it('Defined editUser', () => {

   expect(controller.editUser(editUser)).toBeDefined;
 })

 it('Defined getPermissions', () => {
   const tempID = "user1234";
   expect(controller.getPermissions(tempID)).toBeDefined;
 })

 it('Defined getStories', () => {
   const tempID = "user1234";
   expect(controller.getStories(tempID)).toBeDefined;
 })

 it('Defined getRoles', () => {
  const tempID = "user1234";
   expect(controller.getRoles(tempID)).toBeDefined;
 })

 it('Defined getBlogs', () => {
  const tempID = "user1234";
   expect(controller.getBlogs(tempID)).toBeDefined;
 })
 
 it('Defined archiveBlog', () => {
  const blogId = "blog1234";
   expect(controller.archiveBlog(blogId)).toBeDefined;
 })
 
 it('Defined unArchiveBlog', () => {
  const blogId = "blog1234";
   expect(controller.unArchiveBlog(blogId)).toBeDefined;
 })

 it('Defined archiveStory', () => {
  const storyId = "#1234";
   expect(controller.archiveStory(storyId)).toBeDefined;
 })

 it('Defined unArchiveStory', () => {
  const storyId = "#1234";
   expect(controller.unArchiveStory(storyId)).toBeDefined;
 })

//Testing functions 
  it('getUser to equal tempUser', () => {
    expect(controller.getUsers("temp1234")).toEqual(tempUser);
  })

  it('getPremissions to equal tempPerms', () => {
    expect(controller.getPermissions("temp1234")).toEqual(tempPerms);
  })

  it('getRoles to equal tempRole', () => {
    expect(controller.getRoles("temp1234")).toEqual(tempRole);
  })

  it('getBlogs to equal tempBlogs', () => {
    expect(controller.getBlogs("temp1234")).toEqual(tempBlog);
  })

  it('getBlogs to equal tempStory', () => {
    expect(controller.getStories("temp1234")).toEqual(tempStory);
  })


//Testing for correct return types
  it('Testing return types of createUser', () => {
    const admin = jest.spyOn(controller,'createUser');
    const returnt = controller.createUser(tempUser);
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getUsers', () => {
    const admin = jest.spyOn(controller,'getUsers');
    const returnt = controller.getUsers("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of editUser', () => {
    const admin = jest.spyOn(controller,'editUser');
    const returnt = controller.editUser(editUser);
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of suspendUser', () => {
    const admin = jest.spyOn(controller,'suspendUser');
    const returnt = controller.suspendUser("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of unSuspendUser', () => {
    const admin = jest.spyOn(controller,'unSuspendUser');
    const returnt = controller.unSuspendUser("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getPermissions', () => {
    const admin = jest.spyOn(controller,'getPermissions');
    const returnt = controller.getPermissions("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getStories', () => {
    const admin = jest.spyOn(controller,'getStories');
    const returnt = controller.getStories("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getRoles', () => {
    const admin = jest.spyOn(controller,'getRoles');
    const returnt = controller.getRoles("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of getBlogs', () => {
    const admin = jest.spyOn(controller,'getBlogs');
    const returnt = controller.getBlogs("temp1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })


  it('Testing return types of archiveBlog', () => {
    const admin = jest.spyOn(controller,'archiveBlog');
    const returnt = controller.archiveBlog("tempblog1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of unArchiveBlog', () => {
    const admin = jest.spyOn(controller,'unArchiveBlog');
    const returnt = controller.unArchiveBlog("tempblog1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of unArchiveBlog', () => {
    const admin = jest.spyOn(controller,'unArchiveBlog');
    const returnt = controller.unArchiveBlog("tempblog1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })

  it('Testing return types of archiveStory', () => {
    const admin = jest.spyOn(controller,'archiveStory');
    const returnt = controller.archiveStory("#1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })
  it('Testing return types of unArchiveStory', () => {
    const admin = jest.spyOn(controller,'archiveStory');
    const returnt = controller.unArchiveStory("#1234");
    expect(admin).toBeCalled();
    expect(returnt).toBeInstanceOf(Promise);
  })
});