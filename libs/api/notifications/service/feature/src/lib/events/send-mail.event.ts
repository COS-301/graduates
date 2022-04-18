<<<<<<< HEAD
import { ApiNotificationsService } from "../api-notifications-service-feature.service";
export class SendMailEvent {
    constructor(private readonly data:ApiNotificationsService){
        //we set the data that we will use here waiting for repository(API)
        //something like
        // email = userData.email
        // then we will use email in the handler file
        // const email= "madunathabo2@gmail.com";
=======
export class SendMailEvent {
    constructor(
        public readonly emailFrom:string,
        public readonly emailTo:string,
        public readonly emailSubject:string,
        public readonly emailText:string){
>>>>>>> 6e6948a99aa5266ce8bf87d411ce50c25d42683e
    }
}