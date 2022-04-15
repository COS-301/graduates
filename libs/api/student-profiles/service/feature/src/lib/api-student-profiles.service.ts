//TODO: create Student model on service layer
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStudentProfileCommand, DeleteStudentProfileCommand, FindStudentProfileCommand, UpdateStudentProfileCommand } from './commands/impl';

@Injectable()
export class ApiStudentProfileService {

  constructor(private commandBus: CommandBus) {}

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
