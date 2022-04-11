export * from './lib/api-adminconsole-repository-data-access.module';

import { PrismaClient, Prisma  } from "@prisma/client";

const prisma = new PrismaClient();

// User
export async function GetAllUsers(){
    const allUsers = await prisma.user.findMany();
    return allUsers;
}

// export async function CreateUser(email : string){
//     const createdUser = await prisma.user.create({
//         data: {
//             email: email,
//             password: '',
//             passwordSalt: '',
//             name: '',
//             dateOfBirth: '',
//             companyId: '',
//             created: '',
//             suspended: false,
//             validated: false
//         },
//     })
//     return createdUser;
// }

// Story
export async function GetAllStories(){
    const allStories = await prisma.story.findMany();
    return allStories;
}

// Blog
export async function GetAllBlogs(){
    const allBlogs = await prisma.blog.findMany();
    return allBlogs;
}