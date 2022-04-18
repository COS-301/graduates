import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SendMailEvent } from "./send-mail.event";
import * as nodemailer from 'nodemailer';
import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";

@EventsHandler(SendMailHandler)
export class SendMailHandler implements IEventHandler<SendMailEvent>{
    constructor(public repository: NotificationsRepository) {}

    handle(event: SendMailEvent) {
<<<<<<< HEAD
        // const notification = this.repository.findByUserIdTo("cl1rpkemf0148e7x5zy7087ma")
        const notification = this.repository.findNotificationsAll()
=======
        const {emailFrom , emailTo, emailSubject, emailText} = event
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "upminiproject301@gmail.com",
                pass: "miniproject301"
            }
        });
        
        const message = {
<<<<<<< HEAD
            from: "upminiproject301@gmail.com",
            to: "u20430168@tuks.co.za",   //data.email    
            subject: notification[0].subject,         //data.notification.data
            text: notification[0].data
=======
            from: emailFrom,
            to: emailTo,   
            subject: emailSubject,
            text: emailText
>>>>>>> b245fc005d0796b73a2d7ec614ea53136f01ceef
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