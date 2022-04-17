import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { DeleteStudentProfileBioEvent, DeleteStudentProfileDateOfBirthEvent, DeleteStudentProfileDegreeNameEvent, DeleteStudentProfileEmailsEvent, DeleteStudentProfileEmploymentStatusEvent, DeleteStudentProfileFilesEvent, DeleteStudentProfileLocationEvent, DeleteStudentProfileNameEvent, DeleteStudentProfilePhoneNumberEvent, DeleteStudentProfileProfilePictureEvent, DeleteStudentProfileSocialMediaEvent, DeleteStudentProfileTagsEvent } from "./delete-student-profile.event";

@EventsHandler(DeleteStudentProfileNameEvent)
export class DeleteStudentProfileNameEventHandler  implements IEventHandler<DeleteStudentProfileNameEvent> {
    handle(event: DeleteStudentProfileNameEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileDateOfBirthEvent)
export class DeleteStudentProfileDateOfBirthEventHandler  implements IEventHandler<DeleteStudentProfileDateOfBirthEvent> {
    handle(event: DeleteStudentProfileDateOfBirthEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileProfilePictureEvent)
export class DeleteStudentProfileProfilePictureEventHandler  implements IEventHandler<DeleteStudentProfileProfilePictureEvent> {
    handle(event: DeleteStudentProfileProfilePictureEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfilePhoneNumberEvent)
export class DeleteStudentProfilePhoneNumberEventHandler  implements IEventHandler<DeleteStudentProfilePhoneNumberEvent> {
    handle(event: DeleteStudentProfilePhoneNumberEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileBioEvent)
export class DeleteStudentProfileEventBioHandler  implements IEventHandler<DeleteStudentProfileBioEvent> {
    handle(event: DeleteStudentProfileBioEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileTagsEvent)
export class DeleteStudentProfileTagsEventHandler  implements IEventHandler<DeleteStudentProfileTagsEvent> {
    handle(event: DeleteStudentProfileTagsEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileSocialMediaEvent)
export class DeleteStudentProfileSocialMediaEventHandler  implements IEventHandler<DeleteStudentProfileSocialMediaEvent> {
    handle(event: DeleteStudentProfileSocialMediaEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileLocationEvent)
export class DeleteStudentProfileLocationEventHandler  implements IEventHandler<DeleteStudentProfileLocationEvent> {
    handle(event: DeleteStudentProfileLocationEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileEmailsEvent)
export class DeleteStudentProfileEmailsEventHandler  implements IEventHandler<DeleteStudentProfileEmailsEvent> {
    handle(event: DeleteStudentProfileEmailsEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileFilesEvent)
export class DeleteStudentProfileFilesEventHandler  implements IEventHandler<DeleteStudentProfileFilesEvent> {
    handle(event: DeleteStudentProfileFilesEvent) {
        console.log('event has been handled: ', event);
    }
}


@EventsHandler(DeleteStudentProfileEmploymentStatusEvent)
export class DeleteStudentProfileEmploymentStatusEventHandler  implements IEventHandler<DeleteStudentProfileEmploymentStatusEvent> {
    handle(event: DeleteStudentProfileEmploymentStatusEvent) {
        console.log('event has been handled: ', event);
    }
}

@EventsHandler(DeleteStudentProfileDegreeNameEvent)
export class DeleteStudentProfileDegreeNameEventHandler  implements IEventHandler<DeleteStudentProfileDegreeNameEvent> {
    handle(event: DeleteStudentProfileDegreeNameEvent) {
        console.log('event has been handled: ', event);
    }
}


