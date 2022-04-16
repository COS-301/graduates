import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
    CreateRequestNotificationCommand,
    UpdateRequestNotificationCommand,
    UpdateSeenCommand
} from './api-notifications-service-commands.command';
import { NotificationsRepository } from '@graduates/api/notifications/repository/data-access';
import { Notification } from '@prisma/client';

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