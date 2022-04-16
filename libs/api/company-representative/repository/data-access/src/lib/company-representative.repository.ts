import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable } from "@nestjs/common";
import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access'
import { UserSocialMedia } from "@prisma/client";

@Injectable()
export class CompanyRepresentativeRepository {

  constructor(private prismaService : PrismaService) {}

  async returnRepObject(id: string, name: string, email: string, jobTitle: string, aboutMe: string, website: string, SocialMedia: UserSocialMedia[], location: string, phone_no: string, experience: string) {
    const companyRep = new CompanyRepresentative();
    companyRep.id = id;
    companyRep.repName = name;
    companyRep.email = email;
    companyRep.jobTitle = jobTitle;
    companyRep.aboutMe = aboutMe;

    for (let i=0;   i< SocialMedia.length;  i++) {
      if (SocialMedia.at(i).type == "FACEBOOK") {
        companyRep.twitter = SocialMedia.at(i).link;
      }
      else if (SocialMedia.at(i).type == "GITHUB") {
        companyRep.gitHub = SocialMedia.at(i).link;
      }
      else if (SocialMedia.at(i).type == "INSTAGRAM") {
        companyRep.instagram = SocialMedia.at(i).link;
      } 
      else if (SocialMedia.at(i).type == "LINKEDIN") {
        companyRep.linkedIn = SocialMedia.at(i).link;
      } 
      else if (SocialMedia.at(i).type == "SNAPCHAT") {
        companyRep.snapChat = SocialMedia.at(i).link;
      } 
      else {
        companyRep.twitter = SocialMedia.at(i).link;
      } 
    }

    companyRep.website = website;
    companyRep.location = location;
    companyRep.phoneNumber = phone_no;
    companyRep.repExperience = experience;
    return companyRep;
  }

  async createDefaultRep() : Promise<CompanyRepresentative>{
    const existing_user = await this.prismaService.user.findUnique({
      where: {
        id: "c1234"
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

    if (!existing_user) {
      const new_user = await this.prismaService.user.create({
        data:{
          id: "c1234",
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
            create: [{
                tag: "Data Engineer at Consnet"
              },{
                tag: "www.ishe.dzingi.com"
              }
            ]
          },
  
          UserSocialMedia: {
            create: [{
                type: "TWITTER",
                link: "ishe@twitter.com"
              }, {
                type: "INSTAGRAM",
                link: "ishe@instagram.com"
              }, {
                type: "LINKEDIN",
                link: "linkedin.com/in/isheanesu-dzingirai-2952b9180"
              }, {
                type: "FACEBOOK",
                link: "ishe@facebook.com"
              },{
                type: "SNAPCHAT",
                link: "snapchat@ishe.com"
              },{
                type: "GITHUB",
                link: "zenthon@github.com"
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
            create: {
              experience: "Worked for Universtity of Pretoria as a Teaching Assistant."
            }
          }
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
      return this.returnRepObject(new_user.id, new_user.name, new_user.email, new_user.UserTag.at(0).tag, new_user.UserProfile.at(0).bio, new_user.UserTag.at(1).tag, new_user.UserSocialMedia, new_user.UserLocation.at(0).location, new_user.UserContactNumber.at(0).number, new_user.UserExperience.at(0).experience)
    }
    return this.returnRepObject(existing_user.id, existing_user.name, existing_user.email, existing_user.UserTag.at(0).tag, existing_user.UserProfile.at(0).bio, existing_user.UserTag.at(1).tag, existing_user.UserSocialMedia, existing_user.UserLocation.at(0).location,existing_user.UserContactNumber.at(0).number, existing_user.UserExperience.at(0).experience)
  }

  // Login
  async login(repEmail : string, repPassword : string) : Promise<CompanyRepresentative>{
    const users = await this.prismaService.user.findMany({
      where: {
        email: repEmail,
        password: repPassword
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
    const user = users[0];
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserProfile.at(0).bio, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

  //  Delete Representative
  async deleteRepresentative(repId: string) {
    const user = await this.prismaService.user.delete({
      where: {
        id: repId
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
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserProfile.at(0).bio, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

  //  Get All Representatives
  async getAllRepresentativeUsers() {
    const users = await this.prismaService.user.findMany({
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

    const representatives = [];
    for (let i=0;   i<users.length;   i++) {
      representatives.push(this.returnRepObject(users[i].id, users[i].name, users[i].email, users[i].UserTag.at(0).tag, users[i].UserProfile.at(0).bio, users[i].UserTag.at(1).tag, users[i].UserSocialMedia, users[i].UserLocation.at(0).location, users[i].UserContactNumber.at(0).number, users[i].UserExperience.at(0).experience))
    }
    return representatives;
  }
    
  //  Get a representative of a company
  async getRepresentativeUser(repId: string) : Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.findUnique ({
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
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserProfile.at(0).bio, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
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
