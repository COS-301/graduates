import { PrismaClient, SocialMedia } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //mock users 1 student 2 companies

  let dob = new Date('1929-06-12 00:00');
  let created = new Date('2022-04-16 10:28');
  const student = await prisma.user.create({
    data: {
      email: 'u12345678@tuks.ac.za',
      password: 'SecurePassword123!',
      passwordSalt: 'Pepper',
      name: 'Anne Frankly',
      dateOfBirth: dob,
      created: created,
      suspended: false,
      validated: false,
    },
  });

  let dob1 = new Date('1999-08-29 00:00');
  let created1 = new Date('2022-04-16 10:32');
  await prisma.user.create({
    data: {
      email: 'CarstensTA@Sacso.co.za',
      password: 'B3stBr3ad',
      passwordSalt: 'Pepper',
      name: 'Tertius Carstens',
      dateOfBirth: dob1,
      //companyID : "", no idea what to store here
      created: created1,
      suspended: false,
      validated: false,
    },
  });

  let dob2 = new Date('1990-10-18 00:00');
  let created2 = new Date('2022-04-16 10:40');
  await prisma.user.create({
    data: {
      email: 'Gerrie@EBC.co.za',
      password: 'EnglishBlacksmithingCompany',
      passwordSalt: 'Pepper',
      name: 'Gerrie Naude',
      dateOfBirth: dob2,
      //companyID : "", no idea what to store here
      created: created2,
      suspended: false,
      validated: true,
    },
  });

  //User Profiles

  await prisma.userProfile.create({
    data: {
      userId: student.id,
      studentNumber: 'u12345678',
      bio: 'Self-Published Author, Never trust anyone #soldout, <3 Gaslight, Gatekeep, Girlboss <3',
    },
  });

  await prisma.userTag.create({
    data: {
      userId: student.id,
      tag: 'Espionage',
    },
  });

  await prisma.userTag.create({
    data: {
      userId: student.id,
      tag: 'AI',
    },
  });

  const linkedin = SocialMedia.LINKEDIN;

  await prisma.userSocialMedia.create({
    data: {
      userId: student.id,
      type: linkedin,
      link: 'linked.com/Anne',
    },
  });

  const insta = SocialMedia.INSTAGRAM;

  await prisma.userSocialMedia.create({
    data: {
      userId: student.id,
      type: insta,
      link: 'insta.com/AnnieeeeFinsta',
    },
  });

  await prisma.userLocation.create({
    data: {
      userId: student.id,
      location: 'Prefer not to say',
    },
  });

  await prisma.userDegree.create({
    data: {
      userID: student.id,
      degreeType: 'B.Sc',
      degreeName: 'ComputerScience',
    },
  });
  // Autherization

  const user1 = (await prisma.user.findUnique({where:{email: 'u12345678@tuks.ac.za'}})).id;
  const user2 = (await prisma.user.findUnique({where:{email: 'CarstensTA@Sacso.co.za'}})).id;
  await prisma.userRole.create({
    data: {
      userId: user1,
      role: 'ADMIN',
    },
  });
  await prisma.userRole.create({
    data: {
      userId: user2,
      role: 'USER',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'CREATE',
      permissionCategory: 'ALL',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'REMOVE',
      permissionCategory: 'ALL',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'ARCHIVE',
      permissionCategory: 'ALL',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'EDIT',
      permissionCategory: 'ALL',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'CREATE',
      permissionCategory: 'USER',
      permissionTenant: 'ALL',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'CREATE',
      permissionCategory: 'PROFILE',
      permissionTenant: 'ALL',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'ADMIN',
      permissionType: 'EDIT',
      permissionCategory: 'PROFILE',
      permissionTenant: 'ALL',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'CREATE',
      permissionCategory: 'PROFILE',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'EDIT',
      permissionCategory: 'PROFILE',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'REMOVE',
      permissionCategory: 'PROFILE',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'CREATE',
      permissionCategory: 'STORY',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'EDIT',
      permissionCategory: 'STORY',
      permissionTenant: 'NONE',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'VIEW',
      permissionCategory: 'PROFILE',
      permissionTenant: 'COMPANY',
    },
  });
  await prisma.rolePermissions.create({
    data: {
      role: 'USER',
      permissionType: 'VIEW',
      permissionCategory: 'STORY',
      permissionTenant: 'VIEWERS',
    },
  });

  await prisma.userPermissions.create({
    data: {
      userId: user1,
      permissionType: 'CREATE',
      permissionCategory: 'PERMISSIONS',
      permissionTenant: 'USER',
    },
  });
  await prisma.userPermissions.create({
    data: {
      userId: user1,
      permissionType: 'EDIT',
      permissionCategory: 'PERMISSIONS',
      permissionTenant: 'USER',
    },
  });
  await prisma.userPermissions.create({
    data: {
      userId: user1,
      permissionType: 'REMOVE',
      permissionCategory: 'PERMISSIONS',
      permissionTenant: 'USER',
    },
  });
  await prisma.userPermissions.create({
    data: {
      userId: user1,
      permissionType: 'CREATE',
      permissionCategory: 'ROLE',
      permissionTenant: 'NONE',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
