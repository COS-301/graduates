import { PrismaClient, SocialMedia } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    //mock users 1 student 2 companies

  await prisma.user.create({
        data:
        {
            email: "u12345678@tuks.ac.za",
            password: "SecurePassword123!",
            passwordSalt: "Pepper",
            name: "Anne Frankly",
            dateOfBirth: "1929-06-12 00:00",
            created: "2022-04-16 10:28",
            suspended: false,
            validated: false
        }
    });
    await prisma.user.create({
        data:
        {
            email: "CarstensTA@Sacso.co.za",
            password: "B3stBr3ad",
            passwordSalt: "Pepper",
            name: "Tertius Carstens",
            dateOfBirth: "1999-08-29 00:00",
            //companyID : "", no idea what to store here
            created: "2022-04-16 10:32",
            suspended: false,
            validated: false
        },
    });
    await prisma.user.create({
        data:
        {
            email: "Gerrie@EBC.co.za",
            password: "EnglishBlacksmithingCompany",
            passwordSalt: "Pepper",
            name: "Gerrie Naude",
            dateOfBirth: "1990-10-18 00:00",
            //companyID : "", no idea what to store here
            created: "2022-04-16 10:40",
            suspended: false,
            validated: true
        },
    });
    

    //User Profiles

    const studentid = await prisma.user.findFirst({where:{name:"Anne Frankly"},select:{id:true}});

    await prisma.userProfile.create({
        data:
        {
            userId: studentid,
            studentNumber: "u12345678",
            bio: "Self-Published Author, Never trust anyone #soldout, <3 Gaslight, Gatekeep, Girlboss <3"
        }
    });

    await prisma.userTag.create({
        data:
        {
            userId: studentid,
            tag: "Espionage"
        }
    });

    await prisma.userTag.create({
        data:
        {
            userId: studentid,
            tag: "AI"
        }
    });

    const linkedin = SocialMedia.LINKEDIN;

    await prisma.userSocialMedia.create({
        data:
        {
            userId: studentid,
            type: linkedin,
            link: "linked.com/Anne"
        }
    });

    const insta = SocialMedia.INSTAGRAM;

    await prisma.userSocialMedia.create({
        data:
        {
            userId: studentid,
            type: insta,
            link: "insta.com/AnnieeeeFinsta"
        }
    });

    await prisma.userLocation.create({
        data:
        {
            userId: studentid,
            location: "Prefer not to say"
        }
    });

    

    await prisma.userDegree.create({
        data:
        {
            userId: studentid,
            degreeType: "B.Sc",
            degreeName: "ComputerScience"
        }
    });

    
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })