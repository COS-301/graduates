import { Injectable } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Injectable()
export class UsersService {
  async getAll(): Promise<AuthenticationUser[]>{
    const authenticationuser = new AuthenticationUser();

    authenticationuser.id = "0";
    authenticationuser.username = "John";
    authenticationuser.dummy = "dummy";

    return [authenticationuser];


  }
}