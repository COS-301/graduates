import { Controller,Get } from '@nestjs/common';

@Controller('api-notifications-api-feature')
export class ApiNotificationsApiFeatureController {
    @Get()
    returnAll():string{
        return 'will get all the notifications'
    }
}
