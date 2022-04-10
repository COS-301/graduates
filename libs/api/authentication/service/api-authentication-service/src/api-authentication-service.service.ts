import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiAuthenticationService {
  getHello(): string {
    return 'Hello World!';
  }
}
