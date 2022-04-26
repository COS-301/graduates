import { StudentProfilesRepository } from "@graduates/api/student-profiles/repository/data-access";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { SetStudentProfileBioEvent, SetStudentProfileEmailsEvent, SetStudentProfileEmploymentStatusEvent, SetStudentProfileFilesEvent, SetStudentProfileLocationEvent, SetStudentProfileNameEvent, SetStudentProfilePhoneNumberEvent, SetStudentProfileProfilePictureEvent, SetStudentProfileSocialMediaEvent, SetStudentProfileTagsEvent } from "../events/set-student-profile.event";
import { SetStudentProfileEmploymentStatusEventHandler } from "../events/set-student-profile.event.handler";
import { SetStudentProfileBioCommand, SetStudentProfileDegreeNameCommand, SetStudentProfileEmailCommand, SetStudentProfileEmploymentStatusCommand, SetStudentProfileFilesCommand, SetStudentProfileLocationCommand, SetStudentProfileNameCommand, SetStudentProfilePhoneNumberCommand, SetStudentProfileProfilePictureCommand, SetStudentProfileSocialMediaCommand, SetStudentProfileTagsCommand } from "../impl/set-student-profile.command";

@CommandHandler(SetStudentProfileNameCommand)
export class SetStudentProfileNameHandler implements ICommandHandler<SetStudentProfileNameCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, name}: SetStudentProfileNameCommand) {
    const profile = await this.publisher.mergeObjectContext(await this.repository.setName(id, name) as any)
    // profile.apply(new SetStudentProfileNameEvent(
    //     id,
    //     name
    // ));

    // profile.commit();
    return {id, name} as Partial<StudentProfile>;
  }
}

@CommandHandler(SetStudentProfileProfilePictureCommand)
export class SetStudentProfileProfilePictureHandler implements ICommandHandler<SetStudentProfileProfilePictureCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, pfp}: SetStudentProfileProfilePictureCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.setPfp(id, pfp) as any);
    // profile.apply(new SetStudentProfileProfilePictureEvent(
    //     id,
    //     pfp
    // ));

    // profile.commit();
    return {id, pfp} as Partial<StudentProfile>;
  }
}

@CommandHandler(SetStudentProfileBioCommand)
export class SetStudentProfileBioHandler implements ICommandHandler<SetStudentProfileBioCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, bio}: SetStudentProfileBioCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.setBio(id, bio) as any);
    // profile.apply(new SetStudentProfileBioEvent(
    //     id,
    //     bio
    // ));

    // profile.commit();
    return {id, bio} as Partial<StudentProfile>;
  }
}

@CommandHandler(SetStudentProfileTagsCommand)
export class SetStudentProfileTagsHandler implements ICommandHandler<SetStudentProfileTagsCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, tags}: SetStudentProfileTagsCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.addTag(id, tags) as any);
    // profile.apply(new SetStudentProfileTagsEvent(
    //     id,
    //     tags
    // ));

    // profile.commit();
    return {id, tags} as Partial<StudentProfile>;
  }
}


@CommandHandler(SetStudentProfileSocialMediaCommand)
export class SetStudentProfileSocialMediaHandler implements ICommandHandler<SetStudentProfileSocialMediaCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, type, link}: SetStudentProfileSocialMediaCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.addSocialMedia(id, type, link) as any);
    // profile.apply(new SetStudentProfileSocialMediaEvent(
    //     id,
    //     type,
    //     link
    // ));

    // profile.commit();
    return {id, type, link} as Partial<StudentProfile>;
  }
}

@CommandHandler(SetStudentProfileLocationCommand)
export class SetStudentProfileLocationHandler implements ICommandHandler<SetStudentProfileLocationCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, location}: SetStudentProfileLocationCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.setLocation(id, location) as any);
    // profile.apply(new SetStudentProfileLocationEvent(
    //     id,
    //     location
    // ));

    // profile.commit();
    return {id, location} as Partial<StudentProfile>;
  }
}

@CommandHandler(SetStudentProfileEmailCommand)
export class SetStudentProfileEmailHandler implements ICommandHandler<SetStudentProfileEmailCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, email}: SetStudentProfileEmailCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.getEmails( email) as any);
    // profile.apply(new SetStudentProfileEmailsEvent(
    //     id,
    //     email
    // ));

    // profile.commit();
    return {id, email} as Partial<StudentProfile>;
  }
}

// @CommandHandler(SetStudentProfileEmploymentStatusCommand)
// export class SetStudentProfileEmploymentStatusHandler implements ICommandHandler<SetStudentProfileEmploymentStatusCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, status}: SetStudentProfileEmploymentStatusCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.setEmploymentStatus(id, status) as any);
//     profile.apply(new SetStudentProfileEmploymentStatusEvent(
//         id,
//         status
//     ));

//     profile.commit();
//     return {id, employmentStatus: status} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(SetStudentProfilePhoneNumberCommand)
// export class SetStudentProfilePhoneNumberHandler implements ICommandHandler<SetStudentProfilePhoneNumberCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, phoneNumber}: SetStudentProfilePhoneNumberCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.setPhoneNumber(id, phoneNumber) as any);
//     profile.apply(new SetStudentProfilePhoneNumberEvent(
//         id,
//         phoneNumber
//     ));

//     profile.commit();
//     return {id, phoneNumber} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(SetStudentProfileDegreeNameCommand)
// export class SetStudentProfileDegreeNameHandler implements ICommandHandler<SetStudentProfileDegreeNameCommand> {
//   constructor(private repository: SetStudentProfileDegreeNameCommand, private publisher: EventPublisher) {}

//   async execute({id, degreeName}: SetStudentProfileDegreeNameCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.setDegreeName(id, degreeName) as any);
//     profile.apply(new SetStudentProfileEmploymentStatusEvent(
//         id,
//        degreeName
//     ));

//     profile.commit();
//     return {id,degreeName} as Partial<StudentProfile>;
//   }
// }



@CommandHandler(SetStudentProfileFilesCommand)
export class SetStudentProfileFilesHandler implements ICommandHandler<SetStudentProfileFilesCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, fileCategory, filePath, fileExtension}: SetStudentProfileFilesCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.addFiles(id, fileCategory, filePath, fileExtension) as any);
    // profile.apply(new SetStudentProfileFilesEvent(
    //     id,
    //     fileCategory,
    //     filePath,
    //     fileExtension
    // ));

    // profile.commit();
    return {id, files: {fileCategory, filePath, fileExtension} };
  }
}


