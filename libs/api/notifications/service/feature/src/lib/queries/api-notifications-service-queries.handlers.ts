
import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";
import { Notification } from "@prisma/client"
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { 
  GetAllUserNotificationsQuery,
  GetNotificationByIdQuery,
  GetNotificationsRecievedQuery,
  GetNotificationsSentQuery,
  GetNotificationsByTypeQuery
} from './api-notifications-service-queries.query';
// import { ApiNotificationsService } from '../../api-notifications-service-feature.service';


@QueryHandler(GetAllUserNotificationsQuery)
export class GetAllUserNotificationsHandler implements IQueryHandler<GetAllUserNotificationsQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute() {
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


@QueryHandler(GetNotificationsRecievedQuery)
export class GetNotificationsRecievedHandler implements IQueryHandler<GetNotificationsRecievedQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute(query: GetNotificationsRecievedQuery): Promise<Notification[] | null> {
    const { userId }  = query;
    return this.repository.findNotificationsRecieved(userId);
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

