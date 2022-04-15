import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UpdateStudentProfileEvent } from "./update-student-profile.event";

@EventsHandler(UpdateStudentProfileEvent)
export class UpdateStudentProfileEventHandler  implements IEventHandler<UpdateStudentProfileEvent> {
    handle(event: UpdateStudentProfileEvent) {
        console.log('event has been handled: ', event);
    }
}
