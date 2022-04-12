import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './gql-auth-guard';
import { LoginResponese } from './login-response';
import {LoginUserInput} from './login-user-input';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService){}

    @Mutation(() => LoginResponese)
    @UseGuards(GqlAuthGuard)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
        return this.authService.login(loginUserInput);
    }
}
