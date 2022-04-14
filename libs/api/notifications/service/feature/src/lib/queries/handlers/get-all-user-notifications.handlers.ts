
// import { NotificationsRepository } from '@graduates/api/shorts/repository/data-access';
import { ApiNotificationsRepositoryDataAccessModule } from '@graduates/api/notifications/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllUserNotificationsQuery } from '../impl/get-all-user-notifications.query';
import { ApiNotificationsService } from '../../api-notifications-service-feature.service';

@QueryHandler(GetAllUserNotificationsQuery)
export class GetAllUserNotificationsHandler implements IQueryHandler<GetAllUserNotificationsQuery> {
  constructor(private readonly repository: ApiNotificationsRepositoryDataAccessModule) {}

  async execute() {
    // return this.repository.findAll();
  }
}


