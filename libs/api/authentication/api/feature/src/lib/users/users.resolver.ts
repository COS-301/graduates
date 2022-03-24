//import { Query } from '@nestjs/common';
import { Resolver, Query} from '@nestjs/graphql';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(returns => [User])
    users(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
