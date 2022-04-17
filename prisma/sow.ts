import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //delete all entries

  await prisma.userProfile.deleteMany({});

  await prisma.userTag.deleteMany({});

  await prisma.userSocialMedia.deleteMany({});

  await prisma.userLocation.deleteMany({});

  await prisma.userDegree.deleteMany({});

  await prisma.rolePermissions.deleteMany({});

  await prisma.userPermissions.deleteMany({});

  await prisma.userRole.deleteMany({});
  
  //delete user

  await prisma.user.deleteMany({});
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
