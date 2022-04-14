import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SendMailEvent } from "../impl/send-mail.event";
import * as nodemailer from 'nodemailer';
import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";

@EventsHandler(SendMailHandler)
export class SendMailHandler implements IEventHandler<SendMailEvent>{
    constructor(public repository: NotificationsRepository) {}

    handle(event: SendMailEvent) {
        // const notification = this.repository.findByUserIdTo("cl1rpkemf0148e7x5zy7087ma")
        const notification = this.repository.findNotificationsAll()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "upminiproject301@gmail.com",
                pass: "miniproject301"
            }
        });
        
        const message = {
            from: "upminiproject301@gmail.com",
            to: "u20430168@tuks.co.za",   //data.email    
            subject: notification[0].subject,         //data.notification.data
            text: notification[0].data
        }
        
        transport.sendMail(message, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        })
    }
}