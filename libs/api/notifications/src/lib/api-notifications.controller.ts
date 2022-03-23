import { Controller } from '@nestjs/common';
import { ApiNotificationsService } from './api-notifications.service';

@Controller('api-notifications')
export class ApiNotificationsController {
  constructor(private apiNotificationsService: ApiNotificationsService) {}
}
