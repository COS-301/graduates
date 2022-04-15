import { ApiNotificationsService } from "../../api-notifications-service-feature.service";
export class SendMailEvent {
    constructor(private readonly data:ApiNotificationsService){
        //we set the data that we will use here waiting for repository(API)
        //something like
        // email = userData.email
        // then we will use email in the handler file
        // const email= "madunathabo2@gmail.com";
    }
}