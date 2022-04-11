export * from './lib/api-adminconsole-repository-data-access.module';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// User
export async function GetAllUsers(){
    const allUsers = await prisma.user.findMany();
    return allUsers;
}

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