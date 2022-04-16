import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CreateStudentProfileEvent } from "./create-student-profile.event";

@EventsHandler(CreateStudentProfileEvent)
export class CreateStudentProfileEventHandler  implements IEventHandler<CreateStudentProfileEvent> {
    handle(event: CreateStudentProfileEvent) {
        console.log('event has been handled: ', event);
    }
}
