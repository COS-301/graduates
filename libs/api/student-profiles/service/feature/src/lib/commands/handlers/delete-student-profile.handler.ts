import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { DeleteStudentProfileEvent } from "../events";
import { DeleteStudentProfileCommand } from "../impl";

@CommandHandler(DeleteStudentProfileCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteStudentProfileCommand> {
  constructor(private repository: StudentProfileRepository, private publisher: EventPublisher) {} 

  async execute({id}: DeleteStudentProfileCommand) { 

    const studentProfile = new StudentProfile();
    studentProfile.id = id;
 
    const profile = this.publisher.mergeObjectContext(await this.repository.delete(studentProfile));
    profile.apply(new DeleteStudentProfileEvent(
        studentProfile.id,
    ));

    profile.commit();
    return studentProfile;
  }
}