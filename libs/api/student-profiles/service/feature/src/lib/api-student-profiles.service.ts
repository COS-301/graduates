//TODO: create Student model on service layer
<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudentProfileCommand, DeleteStudentProfileCommand, FindStudentProfileCommand, UpdateStudentProfileCommand } from './commands/impl';
=======
import { Get, Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FileCategory, SocialMedia } from '@prisma/client';
import { DeleteStudentProfileFilesCommand, DeleteStudentProfileSocialMediaCommand, DeleteStudentProfileTagsCommand } from './commands/impl/delete-student-profile.command';
import { SetStudentProfileBioCommand, SetStudentProfileEmailCommand, SetStudentProfileFilesCommand, SetStudentProfileLocationCommand, SetStudentProfileNameCommand, SetStudentProfileProfilePictureCommand, SetStudentProfileSocialMediaCommand, SetStudentProfileTagsCommand } from './commands/impl/set-student-profile.command';
import { GetStudentProfileBioQuery, GetStudentProfileDOBQuery, GetStudentProfileEmailsQuery, GetStudentProfileEmploymentStatusQuery, GetStudentProfileFilesQuery, GetStudentProfileLocationQuery, GetStudentProfileNameQuery, GetStudentProfilePFPQuery, GetStudentProfileSocialMediaQuery, GetStudentProfileTagsQuery } from './queries/impl';
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

@Injectable()
export class ApiStudentProfileService {

  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

<<<<<<< HEAD
  //returns all 
  async find(entity) {
    return this.commandBus.execute(new FindStudentProfileCommand(
      entity.id,
      entity.studentNum,
      entity.firstName,
      entity.lastName,
      entity.title,
      entity.email,
      entity.phoneNum,
      entity.dateOfBirth,
      entity.nameOfDegree,
      entity.bio,
      entity.tags,
      entity.preferredLocation,
      entity.employmentStatus,
      entity.notableAchievements,
      entity.links,
      entity.academicRecod,
      entity.cv,
      entity.capstoneProject,
    ))
=======
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
  async setPfp(userid : string, pfp) {
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
  async addSocialMedia(userid : string, type: SocialMedia, link:string) {
    return await this.commandBus.execute( new SetStudentProfileSocialMediaCommand(userid, type, link))
  }
  async removeSocialMedia(userid : string) {
    return await this.commandBus.execute( new DeleteStudentProfileSocialMediaCommand(userid))
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
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
  }

  // returns single instance
  async findById(id: string) {
    return this.commandBus.execute(new FindStudentProfileCommand(id))
  }

  async update(entity) {
    return this.commandBus.execute(
      new UpdateStudentProfileCommand(
        entity.id,
        entity.studentNum,
        entity.firstName,
        entity.lastName,
        entity.title,
        entity.email,
        entity.phoneNum,
        entity.dateOfBirth,
        entity.nameOfDegree,
        entity.bio,
        entity.tags,
        entity.preferredLocation,
        entity.employmentStatus,
        entity.notableAchievements,
        entity.links,
        entity.academicRecod,
        entity.cv,
        entity.capstoneProject,)
    ); // link to repository
  }

  async delete(id: string) {
    return this.commandBus.execute(
      new DeleteStudentProfileCommand(id)
    ); 
  }

  async create(entity) {
    return this.commandBus.execute(
      new CreateStudentProfileCommand(
        entity.id,
        entity.studentNum,
        entity.firstName,
        entity.lastName,
        entity.title,
        entity.email,
        entity.phoneNum,
        entity.dateOfBirth,
        entity.nameOfDegree,
        entity.bio,
        entity.tags,
        entity.preferredLocation,
        entity.employmentStatus,
        entity.notableAchievements,
        entity.links,
        entity.academicRecod,
        entity.cv,
        entity.capstoneProject,
      )
    );
  }
  
}
