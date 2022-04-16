import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable} from "@nestjs/common";
import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access'

@Injectable()
export class CompanyRepresentativeRepository {

  constructor(private prismaService : PrismaService) {}

  async createDefaultRep() {
    return await this.prismaService.user.create({
      data:{
        id: "c0000",
        email: "ishe.dzingirai@gmail.com",
        password: "IamACSStudent@1",
        name: "Isheanesu Joseph Dzingirai",
        created: new Date(),
        validated: true, 
        suspended: false,

        UserRole: {
          create: {
            role: "REPRESENTATIVE"
          }
        },

        UserPermissions: {
          create: {
            permissionCategory: "PROFILE",
            permissionTenant: "USER",
            permissionType: "ALL"
          }
        },

        UserProfile: {
          create: {
            bio: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning."
          }
        },

        UserTag: {
          create: {
            tag: "Data Engineer at Consnet"
          }
        },

        UserSocialMedia: {
          create: [
            {
              type: "TWITTER",
              link: "ishe@twitter.com"
            }, {
              type: "INSTAGRAM",
              link: "ishe@instagram.com"
            }, {
              type: "LINKEDIN",
              link: "ishe@linkedin.com"
            }, {
              type: "FACEBOOK",
              link: "ishe@facebook.com"
            },{
              type: "SNAPCHAT",
              link: "snapchat@ishe.com"
            },{
              type: "GITHUB",
              link: "linkedin.com/in/isheanesu-dzingirai-2952b9180"
            },
          ]
        },

        UserLocation: {
          create: {
            location: "Hatfield, Gauteng, 0028"
          }
        },

        UserContactNumber: {
          create: {
            number: "0724545654"
          }
        },

        UserExperience: {
          create: [
            {
              experience: "Worked for Universtity of Pretoria as a Teaching Assistant."
            },
            {
              experience: "Worked at Consnet as a Business Analyst."
            },
            {
              experience: "Worked at Derivco as a Data and Machine Engineer"
            }
          ]
        }
      }
    })
  }

  // Login
  async login(repEmail : string, repPassword : string) {
    return await this.prismaService.user.findMany({
      where: {
        email: repEmail,
        password: repPassword
      },
      select: {
        id: true
      }
    })
  }

  //  Delete Representative
  async deleteRepresentative(repId: string) {
    const deleteUser = this.prismaService.user.deleteMany({
      where: {
        id: repId
      }
    })

    const deleteContactNumber = this.prismaService.userContactNumber.deleteMany({
      where: {
        userId: repId
      }
    })

    const deleteUserProfileFile = this.prismaService.userProfileFile.deleteMany({
      where: {
        userId: repId
      }
    })

    return await this.prismaService.$transaction([deleteUser])
  }

  //  Get All Representatives
  async getAllRepresentativeUsers() {
    return this.prismaService.user.findMany({
      include: {
        userScouted: true,
        UserRole: true,
        UserProfile: true,
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })
  }
    
  //  Get a representative of a company
  async getRepresentativeUser(repId: string) {
    return await this.prismaService.user.findUnique ({
      where: {
        id: repId,
      },
      include: {
        userScouted: true,
        UserRole: true,
        UserProfile: true,
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true

      }
    })
  }

  // Update name
  async updateRepName(repId: string, newName: string) {
    return await this.prismaService.user.update({
      where: {
        id: repId,
      },
      data: {
        name: newName
      }
    })
  }

  // Update Job Title
  async updateRepBio(repId: string, newBio: string) {
    return await this.prismaService.userProfile.update({
      where: {
        userId: repId,
      },
      data: {
        bio: newBio
      }
    })
  }

  // Update Location
  async updateRepLocation(repId: string, newLocation: string) {
    return await this.prismaService.userLocation.update({
      where: {
        userId: repId
      },
      data: {
        location: newLocation
      }
    })
  }

  //  Update Contact Number
  async updateRepContactNumber(repId: string, newNumber: string) {
    return await this.prismaService.userContactNumber.update({
      where: {
        userId: repId
      },
      data: {
        number: newNumber
      }
    })
  }

  // Update Experience
  async updateRepExprience(repId: string, newExperience: string) {
    return await this.prismaService.userExperience.update({
      where: {
        userId: repId
      },
      data: {
        experience: newExperience
      }
    })
  }
}
