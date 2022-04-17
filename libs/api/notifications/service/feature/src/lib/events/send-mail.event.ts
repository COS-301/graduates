import { ApiNotificationsService } from "../api-notifications-service-feature.service";
// import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";
export class SendMailEvent {
    constructor(
        public readonly emailFrom:string,
        public readonly emailTo:string,
        public readonly emailSubject:string,
        public readonly emailText:string){
    }
}