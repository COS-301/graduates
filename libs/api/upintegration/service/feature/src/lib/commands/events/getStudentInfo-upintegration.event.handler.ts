import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { getStudentInfoEvent } from "./getStudentInfo-upintegration.event";

@EventsHandler(getStudentInfoEvent)
export class getStudentInfoEventHandler  implements IEventHandler<getStudentInfoEvent> {
    handle(event: getStudentInfoEvent) {
        console.log('event has been handled: ', event);
    }
}
