import { CommonModule } from '@angular/common';
import { Module } from '@nestjs/common';
import { AuthService } from './api-authentication-api-service.service';
import { UsersService } from './api-authentication-api-users-service';

@Module({
  providers: [AuthService, UsersService],
  exports: [UsersService, AuthService],
  imports: [CommonModule, 
],
})
export class ApiAuthenticationApiSharedInterfacesDataAccessModule {}



