import {AuthService, LoginResponse, LoginUserInput, UsersService } from '@graduates/api/authentication/service/feature'; //authservice
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthenticationUser } from "@graduates/api/authentication/api/shared/interfaces/data-access";
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './auth/gql-auth-guard';
import { JwtAuthGuard } from './auth/jwt-auth-guard';

@Resolver(of => AuthenticationUser)
export class ApiAuthenticationResolver{
    constructor(private apiauthenticationService: AuthService,
      private usersService: UsersService){}

    //No Strategy
    @Query(() => [AuthenticationUser], {name: 'users'})
    findAll(){
        return this.usersService.findAll();
    }

  /*Local Strategy
  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('username') username: ) {
      return this.apiauthenticationService.login(context.user);
  }*/

 // @Mutation(()=>)

  //JWT Strategy
  @Query(() => [AuthenticationUser], { name: 'jwtusers' })
  @UseGuards(JwtAuthGuard)
  findEverything() {
    return this.usersService.findAll();
  }


  @Query(() => AuthenticationUser, { name: 'user' })
  findOne(@Args('name') name: string) {
    return this.usersService.findOne(name);
  }

  @Mutation(() => LoginResponse)
  login(@Args('username') username: string, @Args('password') password: string) {

      const user = new AuthenticationUser();
      user.email = username;
      user.password = password;
      user.id  ="1";
      user.name = "testUser";

      return this.apiauthenticationService.login(user);
  }

    @Query(() =>String) 
    pingAuthentication(){
      return "on";
    }
}




