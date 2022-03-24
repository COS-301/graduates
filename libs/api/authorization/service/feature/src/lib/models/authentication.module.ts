/*
registration.module.ts // Responsible for user login and signup
*/

// ...other imports
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetDeletePermissionHandler } from '../commands/handlers/get-delete-permission.handler';
import { GetEditPermissionHandler } from '../commands/handlers/get-edit-permission.handler';
import { GetViewPermissionHandler } from '../commands/handlers/get-view-permission.handler'; // For our commands
// import { EventHandlers } from './events/handlers'; // For our events
// import { QueryHandlers } from './queries/handlers'; // For our queries

@Module({
  imports: [CqrsModule],
  providers: [
    //UserRegistrationService,
    GetDeletePermissionHandler,
    GetEditPermissionHandler,
    GetViewPermissionHandler,
    // ...EventHandlers,
    // ...QueryHandlers,
  ],
})
export class AuthenticationModule {}
