import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AuthService } from '@graduates/api/authentication/service/feature';
import { AuthenticationUser } from "@graduates/api/authentication/api/shared/interfaces/data-access";
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => AuthenticationUser)
export class UsersResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [AuthenticationUser], { name: 'users' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => AuthenticationUser, { name: 'user' })
  findOne(@Args('name') name: string) {
    return this.authService.findOne(name);
  }
}