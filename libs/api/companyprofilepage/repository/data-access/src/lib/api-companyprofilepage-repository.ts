import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { SocialMedia } from '@prisma/client';

@Injectable()
export class CompanyProfilePage {
    constructor(private prisma: PrismaService) {}
    
    async getCompanyById(@Param() id:string) {
        return await this.prisma.user.findFirst({
            where: {id: id}
        })
    }

    async getCompanyProfile(@Param() id:string) {
        return await this.prisma.userProfile.findFirst({
            where: {userId: id}
        })
    }

    async editCompanyProfile(@Param() id:string, profilePic: string, bio: string) {
        return await this.prisma.userProfile.update({
            where: {userId: id},
            data : {
                profilePicture: profilePic,
                bio: bio
            }
        })
    }

    async getCompanySocialMedia(@Param() id:string) {
        return await this.prisma.userSocialMedia.findMany({
            where: {userId: id}
        })
    }

    async editCompanySocialMedia(@Param() id:string, linkType: SocialMedia, link: string) {
        return await this.prisma.userSocialMedia.update({
            where: {userId: id},
            data : {
                type: linkType,
                link: link
            }
        })
    }
    
    async getCompanyLocations(@Param() id:string) {
        return await this.prisma.userLocation.findMany({
            where: {userId: id}
        })
    }

    async editCompanyLocations(@Param() id:string, locationIn: string) {
        return await this.prisma.userLocation.update({
            where: {userId: id},
            data : {
                location: locationIn
            }
        })
    }

    async getCompanyEmail(@Param() id:string) {
        return await this.prisma.userEmail.findMany({
            where: {userId: id}
        })
    }

    async editCompanyEmail(@Param() id:string, emailIn: string) {
        return await this.prisma.userEmail.update({
            where: {userId: id},
            data : {
                email: emailIn
            }
        })
    }

    async getCompanyProfileFile(@Param() id:string) {
        return await this.prisma.userProfile.findFirst({
            where: {userId: id}
        })
    }

    async getCompanyContactNumber(@Param() id:string) {
        return await this.prisma.userContactNumber.findFirst({
            where: {userId: id}
        })
    }

    async editCompanyContactNumber(@Param() id:string, numberIn: string) {
        return await this.prisma.userContactNumber.update({
            where: {userId: id},
            data : {
                number: numberIn
            }
        })
    }

}

