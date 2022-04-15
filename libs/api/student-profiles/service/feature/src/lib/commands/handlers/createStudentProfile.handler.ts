import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { CreateStudentProfileEvent } from "../events";
import { CreateStudentProfileCommand } from "../impl";

@CommandHandler(CreateStudentProfileCommand)
export class CreateUserHandler implements ICommandHandler<CreateStudentProfileCommand> {
  constructor(private repository: StudentProfileRepository, private publisher: EventPublisher) {} 

  async execute(command: CreateStudentProfileCommand) { 
    const {id, studentNum, firstName, lastName, title, email, phoneNum, dateOfBirth, nameOfDegree, bio, tags, preferredLocation, employmentStatus, notableAchievements, links, academicRecod, cv, capstoneProject} = command ;


    const studentProfile = new StudentProfile();
    studentProfile.id = id;
    studentProfile.studentNum = studentNum;
    studentProfile.firstName = firstName;
    studentProfile.lastName = lastName;
    studentProfile.title = title;
    studentProfile.email = email;
    studentProfile.phoneNum = phoneNum;
    studentProfile.dateOfBirth = dateOfBirth;
    studentProfile.nameOfDegree = nameOfDegree;
    studentProfile.bio = bio;
    studentProfile.tags = tags;
    studentProfile.preferredLocation = preferredLocation;
    studentProfile.employmentStatus = employmentStatus;
    studentProfile.notableAchievements = notableAchievements;
    studentProfile.links = links;
    studentProfile.academicRecod = academicRecod;
    studentProfile.cv = cv;
    studentProfile.capstoneProject =capstoneProject;

    const profile = this.publisher.mergeObjectContext(await this.repository.save(studentProfile));
    profile.apply(new CreateStudentProfileEvent(
        studentProfile.id,
        studentProfile.studentNum,
        studentProfile.firstName,
        studentProfile.lastName,
        studentProfile.title,
        studentProfile.email,
        studentProfile.phoneNum,
        studentProfile.dateOfBirth,
        studentProfile.nameOfDegree,
        studentProfile.bio,
        studentProfile.tags,
        studentProfile.preferredLocation,
        studentProfile.employmentStatus,
        studentProfile.notableAchievements,
        studentProfile.links,
        studentProfile.academicRecod,
        studentProfile.cv,
        studentProfile.capstoneProject,
    ));
  }
}