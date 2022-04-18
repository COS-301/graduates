import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable } from "@nestjs/common";
import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access'
import { SocialMedia, UserSocialMedia } from "@prisma/client";

@Injectable()
export class CompanyRepresentativeRepository {

  constructor(private prismaService : PrismaService) {}

  async returnRepObject(id: string, name: string, email: string, jobTitle: string, aboutMe: string, website: string, SocialMedia: UserSocialMedia[], location: string, phone_no: string, experience: string) {
    const companyRep = new CompanyRepresentative();
    companyRep.id = id;
    companyRep.role = "Representative";
    companyRep.repName = name;
    companyRep.email = email;
    companyRep.jobTitle = jobTitle;
    companyRep.aboutMe = aboutMe;

    for (let i=0;   i< SocialMedia.length;  i++) {
      if (SocialMedia[i].type == "FACEBOOK") {
        companyRep.facebook = SocialMedia[i].link;
      }
      else if (SocialMedia[i].type == "GITHUB") {
        companyRep.gitHub = SocialMedia[i].link;
      }
      else if (SocialMedia[i].type == "INSTAGRAM") {
        companyRep.instagram = SocialMedia[i].link;
      } 
      else if (SocialMedia[i].type == "LINKEDIN") {
        companyRep.linkedIn = SocialMedia[i].link;
      } 
      else if (SocialMedia[i].type == "SNAPCHAT") {
        companyRep.snapChat = SocialMedia[i].link;
      } 
      else {
        companyRep.twitter = SocialMedia[i].link;
      } 
    }

    companyRep.website = website;
    companyRep.location = location;
    companyRep.phoneNumber = phone_no;
    companyRep.repExperience = experience;
    return companyRep;
  }

  async createDefaultRep() : Promise<CompanyRepresentative>{
    const def_users = []
    const ishe_tags = ["Data Engineer at Consnet", "www.ishe.dzingi.com", "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning."];
    const ishe_socials = ["ishe@twitter.com", "ishe@instagram.com", "linkedin.com/in/isheanesu-dzingirai-2952b9180", "ishe@facebook.com", "ishe@snapchat.com", "zenthon@github.com"]
    def_users.push(this.user("c1234", "ishe.dzingirai@gmail.com", "IamACSStudent@1", "Isheanesu Joseph Dzingirai", ishe_tags, ishe_socials, "Hatfield, Gauteng, 0028", "0724545654", "Worked for Universtity of Pretoria as a Teaching Assistant."))
  
    const agape_tags = ["Services Engineer and Manager at Derived", "www.agape.m.com", "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning."];
    const agape_socials = ["agape@twitter.com", "agape@instagram.com", "linkedin.com/in/agape", "agape@facebook.com", "agape@snapchat.com", "theman299@github.com"]
    def_users.push(this.user("c0000", "agape.m@gmail.com", "Password@1", "Agape Mamphasa", agape_tags, agape_socials, "Hatfield, Gauteng, 0028", "0747779990", "Worked as a Machine Learning Engineer at EPI-USE"));

    const sihle_tags = ["Cloud Associate at AWS", "www.sihle.vezi.com", "A well-presented, highly-focused, and intelligent computer science student passionate about Cloud Security."];
    const sihle_socials = ["sihle@twitter.com", "sihle@instagram.com", "linkedin.com/in/sihle", "sihle@facebook.com", "sihle@snapchat.com", "svezi@github.com"]
    def_users.push(this.user("c1111", "sihle.v@gmail.com", "Password@1", "Siphesihle Vezi", sihle_tags, sihle_socials, "Hatfield, Gauteng, 0028", "0747779990", "Worked as a Data Scientist at Derivco"));
    return def_users[0];  
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
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })

    if (users) {
      const user = users[0];
      return this.returnRepObject(user.id, user.name, user.email, user.UserTag[0].tag, user.UserTag[2].tag, user.UserTag[1].tag, user.UserSocialMedia, user.UserLocation[0].location, user.UserContactNumber[0].number, user.UserExperience[0].experience)
    }
    return null;
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
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })
    
    if (!user)
      return null;
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag[0].tag, user.UserTag[2].tag, user.UserTag[1].tag, user.UserSocialMedia, user.UserLocation[0].location, user.UserContactNumber[0].number, user.UserExperience[0].experience)
  }

  //  Get All Representatives
  async getAllRepresentativeUsers() {
    const users = await this.prismaService.user.findMany({
      include: {
        userScouted: true,
        UserRole: true,
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })

      if (users) {
      const representatives = [];
      for (let i=0;   i<users.length;   i++) {
      representatives.push(this.returnRepObject(users[i].id, users[i].name, users[i].email, users[i].UserTag[0].tag, users[i].UserTag[2].tag, users[i].UserTag[1].tag, users[i].UserSocialMedia, users[i].UserLocation[0].location, users[i].UserContactNumber[0].number, users[i].UserExperience[0].experience))
      }
      return representatives;
    }
    return null;
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
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })
    if (user)
      return this.returnRepObject(user.id, user.name, user.email, user.UserTag[0].tag, user.UserTag[2].tag, user.UserTag[1].tag, user.UserSocialMedia, user.UserLocation[0].location, user.UserContactNumber[0].number, user.UserExperience[0].experience)
    return null;
  }

  // Update name
  async updateRepName(repId: string, newName: string) {
    const user = await this.prismaService.user.update({
      where: {
        id: repId,
      },
      data: {
        name: newName
      }, 
      include: {
        UserTag: true,
        UserSocialMedia: true,
        UserLocation: true,
        UserExperience: true,
        UserContactNumber: true
      }
    })
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag[0].tag, user.UserTag[2].tag, user.UserTag[1].tag, user.UserSocialMedia, user.UserLocation[0].location, user.UserContactNumber[0].number, user.UserExperience[0].experience)
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

  async updateRepEmail(repId: string, newEmail: string) {
    return await this.prismaService.user.update({
      where: {
        id: repId
      },
      data: {
        email: newEmail
      }
    })
  }

  async updateSocial(repId: string, socialType: string, newAccount: string) {
    let t: SocialMedia;
    if (socialType == "TWITTER") {
      t = SocialMedia.TWITTER;
    }
    else if (socialType == "INSTAGRAM") {
      t = SocialMedia.INSTAGRAM;
    }
    else if (socialType == "LINKEDIN") {
      t = SocialMedia.LINKEDIN;
    }
    else if (socialType == "FACEBOOK") {
      t = SocialMedia.FACEBOOK;
    }
    else if (socialType == "SNAPCHAT") {
      t = SocialMedia.TWITTER;
    }
    else {
      t = SocialMedia.TWITTER;
    }

    return await this.prismaService.userSocialMedia.updateMany({
      where: {
        userId: repId,
        type: t
      },
      data: {
        link: newAccount
      }
    })
  }

  

  

  async user(repId: string, repEmail: string, repPassword: string, repName: string, tags: string[], socials: string[], newLoc: string, newContact: string, newExp: string ) {
    const existing_user = await this.prismaService.user.findUnique({
      where: {
        id: repId
      },
      include: {
        userScouted: true,
        UserRole: true,
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
          id: repId,
          email: repEmail,
          password: repPassword,
          name: repName,
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
  
          UserTag: {
            create: [{
                tag: tags[0]
              },{
                tag: tags[1]
              },{
                tag: tags[2]
              }
            ]
          },
  
          UserSocialMedia: {
            create: [{
                type: "TWITTER",
                link: socials[0]
              }, {
                type: "INSTAGRAM",
                link: socials[1]
              }, {
                type: "LINKEDIN",
                link: socials[2]
              }, {
                type: "FACEBOOK",
                link: socials[3]
              },{
                type: "SNAPCHAT",
                link: socials[4]
              },{
                type: "GITHUB",
                link: socials[5]
              },
            ]
          },
  
          UserLocation: {
            create: {
              location: newLoc
            }
          },
  
          UserContactNumber: {
            create: {
              number: newContact
            }
          },
  
          UserExperience: {
            create: {
              experience: newExp
            }
          }
        },
        include: {
          userScouted: true,
          UserRole: true,
          UserTag: true,
          UserContactNumber: true,
          UserExperience: true,
          UserSocialMedia: true,
          UserLocation: true
        }
      })
      return this.returnRepObject(new_user.id, new_user.name, new_user.email, new_user.UserTag[0].tag, new_user.UserTag[2].tag, new_user.UserTag[1].tag, new_user.UserSocialMedia, new_user.UserLocation[0].location, new_user.UserContactNumber[0].number, new_user.UserExperience[0].experience)
    }
    return this.returnRepObject(existing_user.id, existing_user.name, existing_user.email, existing_user.UserTag[0].tag, existing_user.UserTag[2].tag, existing_user.UserTag[1].tag, existing_user.UserSocialMedia, existing_user.UserLocation[0].location,existing_user.UserContactNumber[0].number, existing_user.UserExperience[0].experience)
  }
}

