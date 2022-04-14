import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { DeleteStudentProfileEvent } from "./delete-student-profile.event";

@EventsHandler(DeleteStudentProfileEvent)
export class DeleteStudentProfileEventHandler  implements IEventHandler<DeleteStudentProfileEvent> {
    handle(event: DeleteStudentProfileEvent) {
        console.log('event has been handled: ', event);
    }
}
