
import { NotificationsRepository } from "@graduates/api/notifications/repository/data-access";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllUserNotificationsQuery } from './get-all-user-notifications.query';
// import { ApiNotificationsService } from '../../api-notifications-service-feature.service';


@QueryHandler(GetAllUserNotificationsQuery)
export class GetAllUserNotificationsHandler implements IQueryHandler<GetAllUserNotificationsQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute() {
    return this.repository.findNotificationsAll();
  }
}

@QueryHandler(GetUserNotificationsReceivedQuery)
export class GetUserNotificationsReceivedQuery implements IQueryHandler<GetUserNotificationsReceivedQuery> {
  constructor(private readonly repository: NotificationsRepository) {}

  async execute() {
    // return this.repository.findNotificationById();
  }
}


