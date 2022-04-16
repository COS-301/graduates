import { Controller, Get } from '@nestjs/common';

@Controller('example')
export class FeatureController {
  @Get()
  findAll(): string {
    return 'This action returns all examples';
  }
}
