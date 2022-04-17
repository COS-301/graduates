
import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";
// import { UserRepository } from "@graduates/api/student-profiles/api/shared/data-access"
import { Notification, User } from "@prisma/client"
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  GetAllUserNotificationsQuery,
  GetNotificationByIdQuery,
  GetNotificationsReceivedQuery,
  GetNotificationsSentQuery,
  GetNotificationsByTypeQuery,
  GetUserObjectQuery
} from './api-notifications-service-queries.query';
// import { ApiNotificationsService } from '../../api-notifications-service-feature.service';


@QueryHandler(GetAllUserNotificationsQuery)
export class GetAllUserNotificationsHandler implements IQueryHandler<GetAllUserNotificationsQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(): Promise<Notification[] | null> {
    return this.repository.findNotificationsAll();
  }
}

@QueryHandler(GetNotificationByIdQuery)
export class GetNotificationsByIdHandler implements IQueryHandler<GetNotificationByIdQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetNotificationByIdQuery): Promise<Notification | null> {
    const { id }  = query;
    return this.repository.findNotificationById(id);
  }
}


@QueryHandler(GetNotificationsReceivedQuery)
export class GetNotificationsReceivedHandler implements IQueryHandler<GetNotificationsReceivedQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetNotificationsReceivedQuery): Promise<Notification[] | null> {
    const { userId }  = query;
    return this.repository.findNotificationsReceived(userId);
  }
}

@QueryHandler(GetNotificationsSentQuery)
export class GetNotificationsSentHandler implements IQueryHandler<GetNotificationsSentQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetNotificationsSentQuery): Promise<Notification[] | null> {
    const { userId }  = query;
    return this.repository.findNotificationsSent(userId);
  }
}

@QueryHandler(GetNotificationsByTypeQuery)
export class GetNotificationsByTypeHandler implements IQueryHandler<GetNotificationsByTypeQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetNotificationsByTypeQuery): Promise<Notification[] | null> {
    const { userId, notificationType }  = query;
    return this.repository.findNotificationsByType(userId, notificationType);
  }
}

@QueryHandler(GetUserObjectQuery)
export class GetUserObjectHandler implements IQueryHandler<GetUserObjectQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetUserObjectQuery): Promise<User | null> {
    const { userId }  = query;
    return this.repository.findUserEntity(userId);
  }
}

