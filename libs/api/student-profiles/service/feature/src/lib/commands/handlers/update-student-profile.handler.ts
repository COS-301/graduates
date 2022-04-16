import { CommandHandler, EventPublisher } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { UpdateStudentProfileEvent } from "../events";
import { UpdateStudentProfileCommand } from "../impl";

@CommandHandler(UpdateStudentProfileCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateStudentProfileCommand> {
  constructor(private repository: StudentProfileRepository, private publisher: EventPublisher) {} 

  async execute(command: UpdateStudentProfileCommand) { 
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

    const profile = this.publisher.mergeObjectContext(await this.repository.update(studentProfile));
    profile.apply(new UpdateStudentProfileEvent(
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

    profile.commit();
    return studentProfile;
  }
}