import { ApiAdminConsoleServiceFeature } from '@graduates/api/adminconsole/service/feature'
//import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Query, Resolver,Mutation,Args} from '@nestjs/graphql'
//import { Blog, Prisma, Short, User, UserPermissions, UserRole } from '@prisma/client';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { user_permissions} from '@graduates/api/authorization/repository/shared';
import {role_permissions} from '@graduates/api/authorization/repository/shared';
import { Prisma } from '@prisma/client';
import { User } from '@graduates/api/adminconsole/api/shared/data-access'

@Resolver(()=> User)
export class ApiAdminConsoleResolver{
    constructor(private adminConsoleService: ApiAdminConsoleServiceFeature){}

    @Mutation(() => User)
    async createUser(
      @Args('user') user: Prisma.UserCreateInput,
    ) {
      return this.adminConsoleService.createUser(user);
    }
   
    
    @Query(() => User)
  async getUsers(@Args('userId') userId: string): Promise<User[]> {
    return this.adminConsoleService.getUsers(userId);
  
  }

  @Mutation(() => User)
  async editUser(
    @Args('user') user: User
  ){
    return this.adminConsoleService.editUser(user);
  }


  @Mutation(() => user_permissions)
  async addPermission(
    @Args('user') user: User,
    @Args('permission') permission: Prisma.UserPermissionsUncheckedCreateInput
  ) {
    return this.adminConsoleService.addPermission(user,permission);
  }


  @Query(() => user_permissions)
  async getPermission(@Args('userId') userId: string): Promise<user_permissions[]> {
    return this.adminConsoleService.getPermissions(userId);
  }

  
  @Mutation(() => user_permissions)
  async removePermission(
    @Args('userId') userId: string,
    @Args('permission') permission: Prisma.UserPermissionsWhereUniqueInput
  ) {
    return this.adminConsoleService.removePermission(userId,permission);
  
  } 

  
  @Mutation(() => User)
  async suspendUser(
    @Args('userId') userId: string
  ){
    return this.adminConsoleService.suspendUser(userId);
  
  }

  
  @Mutation(() => User)
  async unSuspendUser(
    @Args('userId') userId: string
  ){
    return this.adminConsoleService.unSuspendUser(userId);
  
  }


  @Query(() => Short)
  async getStories(@Args('userId') userId: string): Promise<Short[]|null> {
    return this.adminConsoleService.getStories(userId);
      } 


  @Query(() => Short)
  async archiveStory(@Args('storyId') storyId: string): Promise<void> {
    return this.adminConsoleService.archiveStory(storyId);
  }

  @Query(() => Short)
  async unArchiveStory(@Args('storyId') storyId: string): Promise<void> {
    return this.adminConsoleService.unArchiveStory(storyId);
  
  }


  @Mutation(() => role_permissions)
  async addRole(
    @Args('user') user: User,
    @Args('role') role: Prisma.UserRoleUncheckedCreateInput
  ){
    return this.adminConsoleService.addRole(user,role);
  }

  @Query(() => role_permissions)
  async getRoles(@Args('userId') userId: string): Promise<role_permissions[]> {
    return this.adminConsoleService.getRoles(userId);
  }

  @Mutation(() => role_permissions)
  async removeRole(
    @Args('userId') userId: string,
    @Args('role') role: Prisma.UserRoleWhereUniqueInput
  ) {
    return this.adminConsoleService.removeRole(userId,role);
  } 

  @Query(() => [Blog])
  async getBlogs(@Args('userId') userId: string): Promise<Blog[]|null> {
    return this.adminConsoleService.getBlogs(userId);

  }
  

  @Query(() => Blog)
  async archiveBlog(@Args('blogId') blogId: string): Promise<void> {
    return this.adminConsoleService.archiveBlog(blogId);
  }
  

  @Query(() => Blog)
  async unArchiveBlog(@Args('blogId') blogId: string): Promise<void> {
    return this.adminConsoleService.unArchiveBlog(blogId);
  }

  @Query(()=>String)
  pingAdminConsole(){
    return "on";
  }

}