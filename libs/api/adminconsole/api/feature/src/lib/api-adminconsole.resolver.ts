import { ApiAdminConsole } from '@graduates/api/adminconsole/repository/data-access'
import { ApiAdminConsoleServiceFeatureModule } from '@graduates/api/adminconsole/service/feature'
import { Param } from '@nestjs/common'
import { Query, Resolver,Mutation,Args,ResolveField,Root } from '@nestjs/graphql'


@Resolver(()=> ApiAdminConsole)
export class ApiAdminConsoleResolver{
    constructor(private adminConsoleService: ApiAdminConsoleServiceFeatureModule){}

    @Query(() => [ApiAdminConsole])
    adminconsole(): Promise<ApiAdminConsole[]>{
        return this.adminConsoleService.getUsers();
    }
    

    // @param {UserCreateInput}

    // @Mutation(() => ApiAdminConsole)
    // async createUser(
    //   @Args('user') user: UserCreateInput,
    // ): Promise<Short | null> {
    //   const user = await this.adminConsoleService.createUser(user);
    // }
   
//     @param { string}
    
//     @Query(() => ApiAdminConsole)
//   async getUserById(@Args('userId') userId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findUserById(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return [res];
//   }

//   @param { UserEditInput}

//   @Mutation(() => ApiAdminConsole)
//   async editUser(
//     @Args('user') user: UserEditInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.editUser(user);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return await this.adminConsoleService.editUser(user);
//   }


//   @param{UserCreateInput}
//   @param {PermissionCreateInput}
//   @Mutation(() => ApiAdminConsole)
//   async addPermission(
//     @Args('user') user: UserCreateInput,
//     @Args('permission') permission: PermissionCreateInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.addPermission(user,permission);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   }

//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async getPermission(@Args('userId') userId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findUserById(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return [res];
//   }

//   @param{UserRemoveInput}
//   @param {PermissionRemoveInput}

//   @Mutation(() => ApiAdminConsole)
//   async removePermission(
//     @Args('user') user: UserRemoveInput,
//     @Args('permission') permission: PermissionRemoveInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.addPermission(user,permission);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   } 

//   @param{string}
//   @Mutation(() => ApiAdminConsole)
//   async suspendUser(
//     @Args('userId') userId: UserSuspendInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.suspendUser(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   }

//   @param{string}
//   @Mutation(() => ApiAdminConsole)
//   async unSuspendUser(
//     @Args('userId') userId: UserEditInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.unSuspendUser(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   }

//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async getStories(@Args('userId') userId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findStoryById(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return [res];
//   } 

//   @param {string}
//   @Query(() => ApiAdminConsole)
//   async archiveStory(@Args('storyId') storyId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findStoryById(storyId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return res;
//   }

//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async unArchiveStory(@Args('storyId') storyId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findStoryById(storyId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return res;
//   }

//   @param{UserAddRoleInput}
//   @param{RoleAddroleInput}

//   @Mutation(() => ApiAdminConsole)
//   async addRole(
//     @Args('user') user: UserAddRoleInput,
//     @Args('role') role: RoleAddRoleInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.addRole(user,role);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return await this.adminConsoleService.addRole(user,role);
//   }

//   @param {string}
//   @Query(() => ApiAdminConsole)
//   async getRoles(@Args('userId') userId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findUserById(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return [res];
//   }

//   async removeRole(
//     @Args('user') user: UserEditInput,
//     @Args('role') role: RoleRemoveRoleInput
//   ): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.removeRole(user,role);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   } 
//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async getBlogs(@Args('userId') userId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findUserById(userId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//     return [res];
//   }
//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async archiveBlog(@Args('blogId') blogId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findBlogById(blogId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   }
//   @param{string}
//   @Query(() => ApiAdminConsole)
//   async unArchiveBlog(@Args('blogId') blogId: string): Promise<ApiAdminConsole | null> {
//     const res = await this.adminConsoleService.findStoryById(blogId);
//     if (!res) {
//       throw new NotFoundException('User not found');
//     }
//   }

// }
// }
  
      

    @Query(() =>String) 
    pingAdminconsole(){
        return "on";
    }
}