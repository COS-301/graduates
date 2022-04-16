import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SendMailEvent } from "./send-mail.event";
import * as nodemailer from 'nodemailer';

@EventsHandler(SendMailHandler)
export class SendMailHandler implements IEventHandler<SendMailEvent>{
    handle(event: SendMailEvent) {
        // const notification = this.repository.findByUserIdTo("cl1rpkemf0148e7x5zy7087ma")
        const {emailFrom , emailTo, emailSubject, emailText} = event

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "upminiproject301@gmail.com",
                pass: "miniproject301"
            }
        });
        
        const message = {
            from: emailFrom,
            to: emailTo,   //data.email    
            subject: emailSubject,         //data.notification.data
            text: emailText
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