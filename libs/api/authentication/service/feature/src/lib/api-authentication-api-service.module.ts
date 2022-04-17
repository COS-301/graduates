import { CommonModule } from '@angular/common';
import { forwardRef, NgModule } from '@angular/core';
//import { ApiAuthenticationApiFeatureModule } from '@graduates/api/authentication/api/feature';
import { Module } from '@nestjs/common';
import { UsersService } from './api-authentication-api.service';

@NgModule({
  providers: [UsersService],
  exports: [UsersService],
  imports: [CommonModule],
})
export class ApiAuthenticationApiSharedInterfacesDataAccessModule {}