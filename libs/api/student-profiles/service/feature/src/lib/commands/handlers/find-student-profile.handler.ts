import { CommandHandler, EventPublisher } from "@nestjs/cqrs";
import { StudentProfile } from "../../models/studentProfile.model";
import { FindStudentProfileEvent } from "../events";
import { FindStudentProfileCommand } from "../impl";

@CommandHandler(FindStudentProfileCommand)
export class FindUserHandler implements ICommandHandler<FindStudentProfileCommand> {
  constructor(private repository: StudentProfileRepository, private publisher: EventPublisher) {} 

  async execute(command: FindStudentProfileCommand) { 
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

    let findByOne = false;
    const keys = Object.keys(studentProfile);
    keys.forEach(key => {
      if(!studentProfile[key]) { 
        findByOne = true;
      }
    })

    const profile = this.publisher.mergeObjectContext( !findByOne ? await this.repository.find(studentProfile) : await this.repository.findByOne(studentProfile) );
    profile.apply(new FindStudentProfileEvent(
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