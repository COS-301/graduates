import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from "@graduates/api/authentication/service/feature";
import { User } from "@graduates/api/authentication/api/shared/interfaces/data-access";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }
}