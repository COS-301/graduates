//import { Query } from '@nestjs/common';
import { Resolver, Query} from '@nestjs/graphql';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { UsersService } from '@graduates/api/authentication/service/feature';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => [User])
    users(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
