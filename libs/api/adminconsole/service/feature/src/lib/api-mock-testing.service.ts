import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Prisma, UserPermissions,User,UserRole,Blog } from '@prisma/client';

@Injectable()
export class MockTestAdminConsole {
    constructor(private prisma: PrismaService){}

    getUsers(userID: string){
        if(userID != null){
            return [{
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
              }];
        }
        return null;
    }

    getPermissions(userID: string){
        if(userID != null){
            return  [{
                permissionCategory: "STUDENT",
                permissionTenant: "COMPANY",
                permissionType: "ALL",
                userId:"temp1234"
              }];
        }
    }

    getRoles(userID: string){
        if(userID != null){
            return [{
                role:"STUDENT",
                userId:"temp1234"
            }];
        }
    }

    getBlogs(userID: string) {
        if(userID != null){
            return [{
                archived: false,
                content: "Update",
                date: new Date("2022/04/17"),
                id: "#1234",
                title: "Starting something new",
                userId: "temp1234"
              }] ;
        }
    }
    createUser(user: Prisma.UserCreateInput): Promise<void>{
       return;
    }

    editUser(user: User){
        return ;
    }

    addPermission(user: User, permission: Prisma.UserPermissionsUncheckedCreateInput){
        return ;
    }

    addRole(user: User, permission: Prisma.UserRoleUncheckedCreateInput){
        return ;
    }

    removePermission(userID: string, permission: Prisma.UserPermissionsWhereUniqueInput){
        return;
    }

    removeRole(userID: string, permission: Prisma.UserRoleWhereUniqueInput){
        return ;
    }

    suspendUser(userID: string){
        return;
    }

    unSuspendUser(userID: string){
        return 
    }

    archiveStory(stroryId: string){
        return ;
    } 

    unArchiveStory(stroryId: string){
        return ;
    } 

    getStories(userID: string){
        return ;
    }

    archiveBlog(blogId: string) {
        return ;
    }

    async unArchiveBlog(blogId: string){
        return ;
    }


}