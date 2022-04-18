import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable, Logger } from "@nestjs/common";
import { CompanyRepresentative } from '@graduates/api/company-representative/api/shared/data-access'
import { SocialMedia, UserSocialMedia } from "@prisma/client";

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
    // Logger.log("in here");
    const existing_user = await this.prismaService.user.findUnique({
      where: {
        id: "c1234"
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
      Logger.log("in here");
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
  
          UserTag: {
            create: [{
                tag: "Data Engineer at Consnet"
              },{
                tag: "www.ishe.dzingi.com"
              },{
                tag: "A well-presented, highly-focused, and intelligent computer science student passionate about data engineering & machine learning."
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
                link: "ishe@snapchat.com"
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

  async createRep(id: string, name: string, pass: string, email: string, jobTitle: string, aboutMe: string, website: string, SocialMedia: UserSocialMedia[], location: string, phone_no: string, experience: string): Promise<CompanyRepresentative>
  {
    const find = await this.prismaService.user.findUnique({
      where: {id: id},
      include:
      {
        userScouted: true,
        UserRole: true,
        UserTag: true,
        UserContactNumber: true,
        UserExperience: true,
        UserSocialMedia: true,
        UserLocation: true
      }
    })

    if(!find)
    {
      let socials: UserSocialMedia[];

      for(let i = 0; i < SocialMedia.length; i++)
      {
        if(SocialMedia[i].link != null)
        {
          socials[i].link = SocialMedia[i].link;
        }
        else
        {
          socials[i].link = "n/a";
        }

        socials[i].type = SocialMedia[i].type;
        socials[i].userId = id
      }

      const newCreate = await this.prismaService.user.create({
        data:{
          id: id,
          email: email,
          password: pass,
          name: name,
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
                tag: jobTitle
              },{
                tag: aboutMe
              },{
                tag: website
              }
            ]
          },



          UserSocialMedia: {
            create: [{
                type: socials[0].type,
                link: socials[0].link
              }, {
                type: socials[1].type,
                link: socials[1].link
              }, {
                type: socials[2].type,
                link: socials[2].link
              }, {
                type: socials[3].type,
                link: socials[3].link
              },{
                type: socials[4].type,
                link: socials[4].link
              },{
                type: socials[5].type,
                link: socials[5].link
              },
            ]
          },
  
          UserLocation: {
            create: {
              location: location
            }
          },
  
          UserContactNumber: {
            create: {
              number: phone_no
            }
          },
  
          UserExperience: {
            create: {
              experience: experience
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
      return this.returnRepObject(newCreate.id, newCreate.name, newCreate.email, newCreate.UserTag.at(0).tag, newCreate.UserTag.at(2).tag, newCreate.UserTag.at(1).tag, socials, newCreate.UserLocation.at(0).location, newCreate.UserContactNumber.at(0).number, newCreate.UserExperience.at(0).experience);
    }
    return this.returnRepObject(find.id, find.name, find.email, find.UserTag.at(0).tag, find.UserTag.at(2).tag, find.UserTag.at(1).tag, find.UserSocialMedia, find.UserLocation.at(0).location, find.UserContactNumber.at(0).number, find.UserExperience.at(0).experience);
  }

  // Update name
  async updateRepName(repId: string, newName: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.update({
      where: {id: repId},
      data: {name: newName},
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
    user.name = newName;
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

  // Update Bio Title
  async updateRepBio(repId: string, newBio: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.findUnique({
      where: {id: repId},
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

    const change = await this.prismaService.userTag.update({
      where:
      {
        userId_tag:
        {
          userId: repId,
          tag: user.UserTag.at(2).tag
        }
      },
      data: {tag: newBio}
    })
    change.tag = newBio;
    return this.returnRepObject(change.userId, user.name, user.email, user.UserTag.at(0).tag, change.tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

  // Update Location
  async updateRepLocation(repId: string, newLocation: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.findUnique({
      where: {id: repId},
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

    const change = await this.prismaService.userLocation.update({
      where: {userId: repId},
      data: {location: newLocation}
    })
    change.location = newLocation;
    return this.returnRepObject(change.userId, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, change.location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

  //  Update Contact Number
  async updateRepContactNumber(repId: string, newNumber: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.findUnique({
      where: {id: repId},
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

    const change = await this.prismaService.userContactNumber.update({
      where: {userId: repId},
      data: {number: newNumber}
    })
    change.number = newNumber;
    return this.returnRepObject(change.userId, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, change.number, user.UserExperience.at(0).experience)
  }

  // Update Experience
  async updateRepExprience(repId: string, newExperience: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.findUnique({
      where: {id: repId},
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

    const change = await this.prismaService.userExperience.update({
      where: {userId: repId},
      data: {experience: newExperience}
    })
    change.experience = newExperience;
    return this.returnRepObject(change.userId, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, change.experience)
  }

  // Update Email
  async updateRepEmail(repId: string, newEmail: string): Promise<CompanyRepresentative> {
    const user = await this.prismaService.user.update({
      where: {id: repId},
      data: {email: newEmail},
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

    user.email = newEmail;
    return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
  }

    // Update Job
    async updateRepJob(repId: string, newJob: string): Promise<CompanyRepresentative> {
      const user = await this.prismaService.user.findUnique({
        where: {id: repId},
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
  
      const change = await this.prismaService.userTag.update({
        where:
        {
          userId_tag:
          {
            userId: repId,
            tag: user.UserTag.at(0).tag
          }
        },
        data: {tag: newJob}
      })
      change.tag = newJob;
      return this.returnRepObject(change.userId, user.name, user.email, change.tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
    }

    // Update Socials
    async updateRepSocials(repId: string, newSocial: string, type: SocialMedia): Promise<CompanyRepresentative> {
      const user = await this.prismaService.user.findUnique({
        where: {id: repId},
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

      let socials: UserSocialMedia[];

      for(let i = 0; i < user.UserSocialMedia.length; i++)
      {
        if(user.UserSocialMedia[i].type != type)
        {
          socials[i].userId = user.UserSocialMedia[i].userId;
          socials[i].type = user.UserSocialMedia[i].type;
          socials[i].link = user.UserSocialMedia[i].link;
        }
        else
        {
          socials[i].userId = user.UserSocialMedia[i].userId;
          socials[i].type = type;
          socials[i].link = newSocial;
        }
      }

      const change = await this.prismaService.userSocialMedia.update(
        {
          where: {userId: repId},
          data: {
            type: type, link: newSocial
          }
        }
      )
      return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, user.UserTag.at(1).tag, socials, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
    }

    // Update website
    async updateRepSite(repId: string, newSite: string): Promise<CompanyRepresentative> {
      const user = await this.prismaService.user.findUnique({
        where: {id: repId},
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
  
      const change = await this.prismaService.userTag.update({
        where:
        {
          userId_tag:
          {
            userId: repId,
            tag: user.UserTag.at(1).tag
          }
        },
        data: {tag: newSite}
      })
      change.tag = newSite;
      return this.returnRepObject(user.id, user.name, user.email, user.UserTag.at(0).tag, user.UserTag.at(2).tag, change.tag, user.UserSocialMedia, user.UserLocation.at(0).location, user.UserContactNumber.at(0).number, user.UserExperience.at(0).experience)
    }
}

  