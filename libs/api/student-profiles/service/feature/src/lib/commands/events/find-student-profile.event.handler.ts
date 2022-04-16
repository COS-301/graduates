import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { FindStudentProfileEvent } from "./find-student-profile.event";

@EventsHandler(FindStudentProfileEvent)
export class FindStudentProfileEventHandler  implements IEventHandler<FindStudentProfileEvent> {
    handle(event: FindStudentProfileEvent) {
        console.log('event has been handled: ', event);
    }
}
