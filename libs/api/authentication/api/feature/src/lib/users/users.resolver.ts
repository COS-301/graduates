import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from "@graduates/api/authentication/service/feature";
import { AuthenticationUser } from "@graduates/api/authentication/api/shared/interfaces/data-access";
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => AuthenticationUser)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [AuthenticationUser], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => AuthenticationUser, { name: 'user' })
  findOne(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }
}