import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SendMailEvent } from "../impl/send-mail.event";
import * as nodemailer from 'nodemailer';
// import { ApiNotificationsRepositoryDataAccessModule } from "@graduates/api/notifications/repository/data-access";

@EventsHandler(SendMailHandler)
export class SendMailHandler implements IEventHandler<SendMailEvent>{
    // constructor(private repository: ApiNotificationsRepositoryDataAccessModule) {}

    handle(event: SendMailEvent) {
        // const {rep} = this.repository.findAll() when the API is fully functional

        // const notification = this.repository.findByUserIdTo("cl1rpkemf0148e7x5zy7087ma")

        // const transport = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: "upminiproject301@gmail.com",
        //         pass: "miniproject301"
        //     }
        //     });
        
        // const message = {
        //     from: "upminiproject301@gmail.com",
        //     to: notification.email,   //data.email    
        //     subject: notification.subject,         //data.notification.data
        //     text: notification.data
        // }
        // transport.sendMail(message, function(err, info) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(info);
        //     }
        // })
    }
}