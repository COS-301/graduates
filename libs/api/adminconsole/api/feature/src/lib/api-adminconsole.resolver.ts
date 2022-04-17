// import { User } from '@graduates/api/adminconsole/repository/data-access'
// import { ApiAdminConsoleServiceFeature } from '@graduates/api/adminconsole/service/feature'
// import { Param } from '@nestjs/common'
import { Query, Resolver,Mutation,Args,ResolveField,Root } from '@nestjs/graphql'
// //import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access'

// import { Short } from '@graduates/api/shorts/api/shared/entities/data-access'
// import { user_permissions} from '@graduates/api/authorization/api/shared'
// import { role_permission} from '@graduates/api/authorization/repository/shared'
// import { Blog } from '@graduates/api/blog/api/shared/entities/data-access'


@Resolver()
export class ApiAdminConsoleResolver{
  //   constructor(private adminConsoleService: ApiAdminConsoleServiceFeature){}


  //   @Mutation(() => User)
  //   async createUser(
  //     @Args('user') user: User,
  //   ) {
  //     return this.adminConsoleService.createUser(users:);
  //   }
   
    
  //   @Query(() => User)
  // async getUserById(@Args('userId') userId: string): Promise<User[]> {
  //   return this.adminConsoleService.getUsers(userId);
  
  // }

  // @Mutation (returns=> User)
  // async editUser(
  //   @Args('user') user: User,
  // ) {
  //   return this.adminConsoleService.editUser(user);
  // }


  // @Mutation(() => User)
  // async addPermission(
  //   @Args('user') user: User,
  //   @Args('permission') permission: UserPermissionsCreateInput
  // ){
  //   return this.adminConsoleService.addPermission(user,permission);
  // }


  // @Query(() => user_permissions)
  // async getPermission(@Args('userId') userId: string): Promise<user_permissions[]|null> {
  //   return this.adminConsoleService.getPermissions(userId);
  // }

  
  // @Mutation(() => user_permissions)
  // async removePermission(
  //   @Args('userId') userId: string,
  //   @Args('permission') permission: UserPermissionsDeleteArgs
  // ){
  //   return this.adminConsoleService.removePermission(userId,permission);
  
  // } 

  
  // @Mutation(() => User)
  // async suspendUser(
  //   @Args('userId') userId: string
  // ){
  //   return this.adminConsoleService.suspendUser(userId);
  
  // }

  
  // @Mutation(() => User)
  // async unSuspendUser(
  //   @Args('userId') userId: string
  // ){
  //   return this.adminConsoleService.unSuspendUser(userId);
  
  // }


  // @Query(() => Short)
  // async getStories(@Args('userId') userId: string): Promise<Short[]|null> {
  //   return this.adminConsoleService.getStories(userId);
  //     } 


  // @Query(() => Short)
  // async archiveStory(@Args('storyId') storyId: string): Promise<Short[]|null> {
  //   return this.adminConsoleService.getStories(storyId);
  // }

  // @Query(() => Short)
  // async unArchiveStory(@Args('storyId') storyId: string): Promise<Short[]|null> {
  //   return this.adminConsoleService.getStories(storyId);
  
  // }


  // @Mutation(() => role_permission)
  // async addRole(
  //   @Args('user') user: User,
  //   @Args('role') role: UserRoleCreateInput,
  // ){
  //   return this.adminConsoleService.addRole(user,role);
  // }

  // @Query(() => role_permission)
  // async getRoles(@Args('userId') userId: string): Promise<role_permission[]|null> {
  //   return this.adminConsoleService.getRoles(userId);
  // }

  // @Mutation(() => role_permission)
  // async removeRole(
  //   @Args('userId') userId: string,
  //   @Args('role') role: UserRoleDeleteArgs
  // ){
  //   return this.adminConsoleService.removeRole(userId,role);
  // } 

  // @Query(() => Blog)
  // async getBlogs(@Args('userId') userId: string): Promise<Blog[]|null> {
  //   return this.adminConsoleService.getBlogs(userId);

  // }
  

  // @Query(() => Blog)
  // async archiveBlog(@Args('blogId') blogId: string): Promise<void> {
  //   return this.adminConsoleService.archiveBlog(blogId);
  // }
  

  // @Query(() => Blog)
  // async unArchiveBlog(@Args('blogId') blogId: string): Promise<void> {
  //   return this.adminConsoleService.unArchiveBlog(blogId);
  // }

}