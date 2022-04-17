import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
const prisma = new PrismaService();
async function seed(){
    const dob = new Date("1929-06-12 00:00");
    const created = new Date("2022-04-16 10:28");
    await prisma.user.create({
        data:
        {
            id: '1',
            email: "u12345678@tuks.ac.za",
            password: "SecurePassword123!",
            passwordSalt: "Pepper",
            name: "Anne Frankly",
            dateOfBirth: dob,
            created: created,
            suspended: false,
            validated: false
        }
    });

    const dob1 = new Date("1999-08-29 00:00");
    const created1 = new Date("2022-04-16 10:32");
    await prisma.user.create({
        data:
        {
            id: '2',
            email: "CarstensTA@Sacso.co.za",
            password: "B3stBr3ad",
            passwordSalt: "Pepper",
            name: "Tertius Carstens",
            dateOfBirth: dob1,
            //companyID : "", no idea what to store here
            created: created1,
            suspended: false,
            validated: false
        }});
    await prisma.userRole.create({data:{userId: "1",role:'ADMIN'}});
    await prisma.userRole.create({data:{userId: "2",role:'USER'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'CREATE',permissionCategory:'ALL',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'REMOVE',permissionCategory:'ALL',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'ARCHIVE',permissionCategory:'ALL',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'EDIT',permissionCategory:'ALL',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'CREATE',permissionCategory:'USER',permissionTenant:'ALL'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'CREATE',permissionCategory:'PROFILE',permissionTenant:'ALL'}});
    await prisma.rolePermissions.create({data:{role: "ADMIN",permissionType:'EDIT',permissionCategory:'PROFILE',permissionTenant:'ALL'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'CREATE',permissionCategory:'PROFILE',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'EDIT',permissionCategory:'PROFILE',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'REMOVE',permissionCategory:'PROFILE',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'CREATE',permissionCategory:'STORY',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'EDIT',permissionCategory:'STORY',permissionTenant:'NONE'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'VIEW',permissionCategory:'PROFILE',permissionTenant:'COMPANY'}});
    await prisma.rolePermissions.create({data:{role: "USER",permissionType:'VIEW',permissionCategory:'STORY',permissionTenant:'VIEWERS'}});



    await prisma.userPermissions.createMany({data:{userId: "1",permissionType: "CREATE",permissionCategory:"PERMISSIONS",permissionTenant:"USER"}});
    await prisma.userPermissions.createMany({data:{userId: "1",permissionType: "EDIT",permissionCategory:"PERMISSIONS",permissionTenant:"USER"}});
    await prisma.userPermissions.createMany({data:{userId: "1",permissionType: "REMOVE",permissionCategory:"PERMISSIONS",permissionTenant:"USER"}});
    await prisma.userPermissions.createMany({data:{userId: "1",permissionType: "CREATE",permissionCategory:"ROLE",permissionTenant:"NONE"}});
}

