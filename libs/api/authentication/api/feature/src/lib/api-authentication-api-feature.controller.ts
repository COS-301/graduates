import { Controller, Get } from '@nestjs/common';
import { AppService } from './api-authentication-api-feature.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}