import { ApiAdminConsole } from '@graduates/api/adminconsole/repository/data-access'
import { Param } from '@nestjs/common'
import { Query, Resolver,Mutation,Args,ResolveField,Root } from '@nestjs/graphql'
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access'
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access'
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access'
import { Prisma } from '@prisma/client'
import { ApiAdminConsoleServiceFeature } from '@graduates/api/adminconsole/service/feature'

 
@Resolver(()=> ApiAdminConsole)
export class ApiAdminConsoleResolver{
    constructor(private adminConsoleService: ApiAdminConsoleServiceFeature){}


    @Mutation(() => User)
    async createUser(
      @Args('user') user: Prisma.UserCreateInput,
    ): Promise<void|null> {
      return this.adminConsoleService.createUser(user);
    }
   
    
    @Query(() => User)
  async getUserById(@Args('userId') userId: string): Promise<User[]> {
    return this.adminConsoleService.getUsers(userId);
  
  }

  @Mutation(() => User)
  async editUser(
    @Args('user') user: User
  ): Promise<void|null> {
    return this.adminConsoleService.editUser(user);
  }


  @Mutation(() => Prisma.UserPermissionsScalarFieldEnum)
  async addPermission(
    @Args('user') user: User,
    @Args('permission') permission: Prisma.UserPermissionsCreateInput
  ): Promise<void|null> {
    return this.adminConsoleService.addPermission(user,permission);
  }


  @Query(() => [UserPermissions])
  async getPermission(@Args('userId') userId: string): Promise<UserPermissions|null> {
    return this.adminConsoleService.findUserById(userId);
  }

  
  @Mutation(() => UserPermissions)
  async removePermission(
    @Args('userId') userId: string,
    @Args('permission') permission: UserPermissionsDeleteArgs
  ): Promise<UserPermissions|null> {
    return this.adminConsoleService.addPermission(userId,permission);
  
  } 

  
  @Mutation(() => User)
  async suspendUser(
    @Args('userId') userId: string
  ): Promise<User|void> {
    return this.adminConsoleService.suspendUser(userId);
  
  }

  
  @Mutation(() => User)
  async unSuspendUser(
    @Args('userId') userId: string
  ): Promise<User|void> {
    return this.adminConsoleService.unSuspendUser(userId);
  
  }


  @Query(() => Short)
  async getStories(@Args('userId') userId: string): Promise<Short|null> {
    return this.adminConsoleService.findStoryById(userId);
      } 


  @Query(() => Short)
  async archiveStory(@Args('storyId') storyId: string): Promise<Short|null> {
    return this.adminConsoleService.findStoryById(storyId);
  }

  @Query(() => Short)
  async unArchiveStory(@Args('storyId') storyId: string): Promise<Short|null> {
    return this.adminConsoleService.findStoryById(storyId);
  
  }


  @Mutation(() => UserRole)
  async addRole(
    @Args('user') user: User,
    @Args('role') role: UserRoleCreateInput
  ): Promise<UserRole|null> {
    return this.adminConsoleService.addRole(user,role);
  }

  @Query(() => [UserRole])
  async getRoles(@Args('userId') userId: string): Promise<UserRole|null> {
    return this.adminConsoleService.findUserById(userId);
  }

  @Mutation((=> UserRole))
  async removeRole(
    @Args('userId') userId: string,
    @Args('role') role: UserRoleDeleteArgs
  ): Promise<void> {
    return this.adminConsoleService.removeRole(userId,role);
  } 

  @Query(() => [Blog])
  async getBlogs(@Args('userId') userId: string): Promise<Blog|null> {
    return this.adminConsoleService.findUserById(userId);

  }
  

  @Query(() => Blog)
  async archiveBlog(@Args('blogId') blogId: string): Promise<Blog|null> {
    return this.adminConsoleService.findBlogById(blogId);
  }
  

  @Query(() => Blog)
  async unArchiveBlog(@Args('blogId') blogId: string): Promise<Blog|null> {
    return this.adminConsoleService.findStoryById(blogId);
  }

}
