import { StudentProfilesRepository } from "@graduates/api/student-profiles/repository/data-access";
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { DeleteStudentProfileFilesEvent, DeleteStudentProfileSocialMediaEvent, DeleteStudentProfileTagsEvent } from "../events/delete-student-profile.event";
import { DeleteStudentProfileFilesCommand, DeleteStudentProfileSocialMediaCommand, DeleteStudentProfileTagsCommand } from "../impl/delete-student-profile.command";

// @CommandHandler(DeleteStudentProfileNameCommand)
// export class DeleteStudentProfileNameHandler implements ICommandHandler<DeleteStudentProfileNameCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, name}: DeleteStudentProfileNameCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeName(id, name) as any);
//     profile.apply(new DeleteStudentProfileNameEvent(
//         id,
//         name
//     ));

//     profile.commit();
//     return {id, name} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfileProfilePictureCommand)
// export class DeleteStudentProfileProfilePictureHandler implements ICommandHandler<DeleteStudentProfileProfilePictureCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, pfp}: DeleteStudentProfileProfilePictureCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removePfp(id, pfp) as any);
//     profile.apply(new DeleteStudentProfileProfilePictureEvent(
//         id,
//         pfp
//     ));

//     profile.commit();
//     return {id, pfp} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfileBioCommand)
// export class DeleteStudentProfileBioHandler implements ICommandHandler<DeleteStudentProfileBioCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, bio}: DeleteStudentProfileBioCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeBio(id, bio) as any);
//     profile.apply(new DeleteStudentProfileBioEvent(
//         id,
//         bio
//     ));

//     profile.commit();
//     return {id, bio} as Partial<StudentProfile>;
//   }
// }

@CommandHandler(DeleteStudentProfileTagsCommand)
export class DeleteStudentProfileTagsHandler implements ICommandHandler<DeleteStudentProfileTagsCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, tags}: DeleteStudentProfileTagsCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.removeTag(id, tags) as any);
    profile.apply(new DeleteStudentProfileTagsEvent(
        id,
        tags
    ));

    profile.commit();
    return {id, tags} as Partial<StudentProfile>;
  }
}


@CommandHandler(DeleteStudentProfileSocialMediaCommand)
export class DeleteStudentProfileSocialMediaHandler implements ICommandHandler<DeleteStudentProfileSocialMediaCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, type}: DeleteStudentProfileSocialMediaCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.removeSocialMedia(id,type) as any);
    profile.apply(new DeleteStudentProfileSocialMediaEvent(
        id,
        type,
    ));

    profile.commit();
    return {id, type} as Partial<StudentProfile>;
  }
}

// @CommandHandler(DeleteStudentProfileLocationCommand)
// export class DeleteStudentProfileLocationHandler implements ICommandHandler<DeleteStudentProfileLocationCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, location}: DeleteStudentProfileLocationCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeLocation(id, location) as any);
//     profile.apply(new DeleteStudentProfileLocationEvent(
//         id,
//         location
//     ));

//     profile.commit();
//     return {id, location} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfileEmailCommand)
// export class DeleteStudentProfileEmailHandler implements ICommandHandler<DeleteStudentProfileEmailCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, email}: DeleteStudentProfileEmailCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeEmails(id, email) as any);
//     profile.apply(new DeleteStudentProfileEmailsEvent(
//         id,
//         email
//     ));

//     profile.commit();
//     return {id, email} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfileEmploymentStatusCommand)
// export class DeleteStudentProfileEmploymentStatusHandler implements ICommandHandler<DeleteStudentProfileEmploymentStatusCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, status}: DeleteStudentProfileEmploymentStatusCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeEmploymentStatus(id, status) as any);
//     profile.apply(new DeleteStudentProfileEmploymentStatusEvent(
//         id,
//         status
//     ));

//     profile.commit();
//     return {id, employmentStatus: status} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfilePhoneNumberCommand)
// export class DeleteStudentProfilePhoneNumberHandler implements ICommandHandler<DeleteStudentProfilePhoneNumberCommand> {
//   constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

//   async execute({id, phoneNumber}: DeleteStudentProfilePhoneNumberCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removePhoneNumber(id, phoneNumber) as any);
//     profile.apply(new DeleteStudentProfilePhoneNumberEvent(
//         id,
//         phoneNumber
//     ));

//     profile.commit();
//     return {id, phoneNumber} as Partial<StudentProfile>;
//   }
// }

// @CommandHandler(DeleteStudentProfileDegreeNameCommand)
// export class DeleteStudentProfileDegreeNameHandler implements ICommandHandler<DeleteStudentProfileDegreeNameCommand> {
//   constructor(private repository: StudentProfilerepository, private publisher: EventPublisher) {}

//   async execute({id, degreeName}: DeleteStudentProfileDegreeNameCommand) {
//     const profile = this.publisher.mergeObjectContext(await this.repository.removeDegreeName(id, degreeName) as any);
//     profile.apply(new DeleteStudentProfileDegreeNameEvent(
//         id,
//        degreeName
//     ));

//     profile.commit();
//     return {id,degreeName} as Partial<StudentProfile>;
//   }
// }



@CommandHandler(DeleteStudentProfileFilesCommand)
export class DeleteStudentProfileFilesHandler implements ICommandHandler<DeleteStudentProfileFilesCommand> {
  constructor(private repository: StudentProfilesRepository, private publisher: EventPublisher) {}

  async execute({id, fileCategory, filePath, fileExtension}: DeleteStudentProfileFilesCommand) {
    const profile = this.publisher.mergeObjectContext(await this.repository.removeFiles(id, fileCategory) as any);
    profile.apply(new DeleteStudentProfileFilesEvent(
        id,
        fileCategory,
        filePath,
        fileExtension
    ));

    profile.commit();
    return {id, files: {fileCategory, filePath, fileExtension} };
  }
}


