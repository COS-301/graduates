import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

//import { CommandHandlers } from './commands/handlers';
//import { QueryHandlers } from './queries/handlers';
import { ApiAuthenticationService } from './api-authentication-service.service';
import { RegisterCommand } from './commands/RgisterCommand';
import { LoginQuery } from './queries/LoginQuery';

@Module({
  imports: [CqrsModule],
  providers: [
    RegisterCommand,
    LoginQuery,
    ApiAuthenticationService 
  ],
  exports: [ApiAuthenticationService]
})
export class ApiAuthenticationServiceModule {}