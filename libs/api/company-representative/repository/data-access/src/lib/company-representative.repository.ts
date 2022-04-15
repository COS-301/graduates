import {PrismaService} from "@graduates/api/shared/services/prisma/data-access";
import {Injectable} from "@nestjs/common";

@Injectable()
export class CompanyRepresentativeRepository {

  constructor(private prismaService : PrismaService) {}

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
}
