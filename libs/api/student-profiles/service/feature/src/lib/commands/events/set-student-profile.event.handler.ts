import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SetStudentProfileBioEvent, SetStudentProfileDateOfBirthEvent, SetStudentProfileDegreeNameEvent, SetStudentProfileEmailsEvent, SetStudentProfileEmploymentStatusEvent, SetStudentProfileFilesEvent, SetStudentProfileLocationEvent, SetStudentProfileNameEvent, SetStudentProfilePhoneNumberEvent, SetStudentProfileProfilePictureEvent, SetStudentProfileSocialMediaEvent, SetStudentProfileTagsEvent } from "./set-student-profile.event";

@EventsHandler(SetStudentProfileNameEvent)
export class SetStudentProfileEventHandler  implements IEventHandler<SetStudentProfileNameEvent> {
    handle(event: SetStudentProfileNameEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileDateOfBirthEvent)
export class SetStudentProfileDateOfBirthEventHandler  implements IEventHandler<SetStudentProfileDateOfBirthEvent> {
    handle(event: SetStudentProfileDateOfBirthEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileProfilePictureEvent)
export class SetStudentProfileProfilePictureEventHandler  implements IEventHandler<SetStudentProfileProfilePictureEvent> {
    handle(event: SetStudentProfileProfilePictureEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfilePhoneNumberEvent)
export class SetStudentProfilePhoneNumberEventHandler  implements IEventHandler<SetStudentProfilePhoneNumberEvent> {
    handle(event: SetStudentProfilePhoneNumberEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileBioEvent)
export class SetStudentProfileBioEventHandler  implements IEventHandler<SetStudentProfileBioEvent> {
    handle(event: SetStudentProfileBioEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileTagsEvent)
export class SetStudentProfileTagsEventHandler  implements IEventHandler<SetStudentProfileTagsEvent> {
    handle(event: SetStudentProfileTagsEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileSocialMediaEvent)
export class SetStudentProfileSocialMediaEventHandler  implements IEventHandler<SetStudentProfileTagsEvent> {
    handle(event: SetStudentProfileTagsEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileLocationEvent)
export class SetStudentProfileLocationEventHandler  implements IEventHandler<SetStudentProfileLocationEvent> {
    handle(event: SetStudentProfileLocationEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileEmailsEvent)
export class SetStudentProfileEmailsEventHandler  implements IEventHandler<SetStudentProfileEmailsEvent> {
    handle(event: SetStudentProfileEmailsEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileFilesEvent)
export class SetStudentProfileFilesEventHandler  implements IEventHandler<SetStudentProfileFilesEvent> {
    handle(event: SetStudentProfileFilesEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileEmploymentStatusEvent)
export class SetStudentProfileEmploymentStatusEventHandler  implements IEventHandler<SetStudentProfileEmploymentStatusEvent> {
    handle(event: SetStudentProfileEmploymentStatusEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(SetStudentProfileDegreeNameEvent)
export class SetStudentProfileDegreeNameEventHandler  implements IEventHandler<SetStudentProfileDegreeNameEvent> {
    handle(event: SetStudentProfileDegreeNameEvent) {
        console.log('event has been handled: ', event);
    }
}
