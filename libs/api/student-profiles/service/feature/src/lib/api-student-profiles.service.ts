//TODO: create Student model on service layer
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FileCategory, SocialMedia } from '@prisma/client';
import { DeleteStudentProfileFilesCommand, DeleteStudentProfileSocialMediaCommand, DeleteStudentProfileTagsCommand } from './commands/impl/delete-student-profile.command';
import { SetStudentProfileBioCommand, SetStudentProfileEmailCommand, SetStudentProfileFilesCommand, SetStudentProfileLocationCommand, SetStudentProfileNameCommand, SetStudentProfileProfilePictureCommand, SetStudentProfileSocialMediaCommand, SetStudentProfileTagsCommand } from './commands/impl/set-student-profile.command';
import { GetStudentProfileBioQuery, GetStudentProfileDOBQuery, GetStudentProfileEmailsQuery, GetStudentProfileEmploymentStatusQuery, GetStudentProfileFilesQuery, GetStudentProfileLocationQuery, GetStudentProfileNameQuery, GetStudentProfilePFPQuery, GetStudentProfileSocialMediaQuery, GetStudentProfileTagsQuery } from './queries/impl';

@Injectable()
export class ApiStudentProfileService {

  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  async getName(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileNameQuery(userid))
  }
  async setName(userid : string, name: string) {
    return await this.commandBus.execute( new SetStudentProfileNameCommand(userid, name))
  }
  async getDoB(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileDOBQuery(userid))
  }
  async getPfp(userid : string) {
    return await this.queryBus.execute( new GetStudentProfilePFPQuery(userid))
  }
  async setPfp(userid : string, pfp: string) {
    return await this.commandBus.execute( new SetStudentProfileProfilePictureCommand(userid, pfp))
  }
  async getBio(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileBioQuery(userid))
  }
  async setBio(userid : string, bio: string) {
    return await this.commandBus.execute( new SetStudentProfileBioCommand(userid, bio))
  }
  async getTags(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileTagsQuery(userid))
  }
  async addTag(userid : string, tag: string) {
    return await this.commandBus.execute( new SetStudentProfileTagsCommand(userid, tag))
  }
  async removeTag(userid : string, tag: string) {
    return await this.commandBus.execute( new DeleteStudentProfileTagsCommand(userid, tag))
  }
  async getSocialMedia(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileSocialMediaQuery(userid))
  }
  async addSocialMedia(userid : string, type: string, link:string) {
    const newType = await this.convertSocialMedia(type);
    return await this.commandBus.execute( new SetStudentProfileSocialMediaCommand(userid, newType, link))
  }
  async removeSocialMedia(userid : string, type : string) {
    const newType = await this.convertSocialMedia(type);
    return await this.commandBus.execute( new DeleteStudentProfileSocialMediaCommand(userid, newType))
  }
  async getLocation(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileLocationQuery(userid))
  }
  async setLocation(userid : string, location: string) {
    return await this.commandBus.execute( new SetStudentProfileLocationCommand(userid, location))
  }
  async getEmails(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileEmailsQuery(userid))
  }
  async setEmails(userid : string, emails: string) {
    return await this.commandBus.execute( new SetStudentProfileEmailCommand(userid, emails))
  }
  async getFiles(userid : string) {
    return await this.queryBus.execute( new GetStudentProfileFilesQuery(userid))
  }
  async addFiles(userid : string, fileCategory : FileCategory, filePath : string, fileExtension : string) {
    return await this.commandBus.execute( new SetStudentProfileFilesCommand(userid, fileCategory, filePath, fileExtension))
  }
  async removeFiles(userid : string, fileCategory : FileCategory) {
    return await this.commandBus.execute( new DeleteStudentProfileFilesCommand(userid,fileCategory))
  }
  async getEmploymentStatus(userId: string) {
    return await this.queryBus.execute( new GetStudentProfileEmploymentStatusQuery(userId))
  }

  private async convertSocialMedia(type: string) {
    let newType;
    switch (type[0].toLowerCase()) {
      case 't':
        newType = SocialMedia[0]
        break;
        case 'i':
        newType = SocialMedia[1]
        break;
        case 'l':
        newType = SocialMedia[2]
        break;
        case 'f':
        newType = SocialMedia[3]
        break;
        case 's':
        newType = SocialMedia[4]
        break;
        case 'g':
        newType = SocialMedia[5]
        break;
      default:
        return null;
        break;
    }
    return newType;
  }

}
