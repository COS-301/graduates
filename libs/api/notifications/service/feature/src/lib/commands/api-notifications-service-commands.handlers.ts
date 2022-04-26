import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
    CreateRequestNotificationCommand,
    UpdateRequestNotificationCommand,
    UpdateSeenCommand,
    SendMailCommand
} from './api-notifications-service-commands.command';
import { NotificationsRepository } from '@graduates/api/notifications/repository/data-access';
import { Notification } from '@prisma/client';
import * as nodemailer from 'nodemailer';

@CommandHandler(CreateRequestNotificationCommand)
export class CreateRequestNotificationHandler implements ICommandHandler<CreateRequestNotificationCommand> {
    constructor(private readonly repository: NotificationsRepository) {}

    async execute(command: CreateRequestNotificationCommand): Promise<Notification | null> {
        const {userIdTo, userIdFrom, notificationType} = command;

        return this.repository.createRequestNotification(userIdTo, userIdFrom, notificationType);
    }
}

@CommandHandler(UpdateRequestNotificationCommand)
export class UpdateRequestNotificationHandler implements ICommandHandler<UpdateRequestNotificationCommand> {
    constructor(private readonly repository: NotificationsRepository) {}

    async execute(command: UpdateRequestNotificationCommand) {
        const {id, status} = command;

        return this.repository.updateRequestNotification(id, status);
    }
}

@CommandHandler(UpdateSeenCommand)
export class UpdateSeenHandler implements ICommandHandler<UpdateSeenCommand> {
    constructor(private readonly repository: NotificationsRepository) {}

    async execute(command: UpdateSeenCommand) {
        const {id,seen} = command;

        return this.repository.updateSeen(id,seen);
    }
}


@CommandHandler(SendMailCommand)
export class SendMailHandler implements ICommandHandler<SendMailCommand>{
    constructor() {
        //
    }
        async execute(command: SendMailCommand) {
        // const notification = this.repository.findByUserIdTo("cl1rpkemf0148e7x5zy7087ma")
        const {emailFrom , emailTo, emailSubject, emailText} = command;

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