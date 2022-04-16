import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetDeletePermissionCommand } from '../commands/get-delete-permission.command';

/*
create-user.handler.ts
*/
@CommandHandler(GetDeletePermissionCommand)
export class GetDeletePermissionHandler
  implements ICommandHandler<GetDeletePermissionCommand>
{
  constructor(private repository: UserRepository) {}

  async execute(command: GetDeletePermissionCommand): Promise<User> {
    // Destruct data from command object
    const { userType, isUserPermitted } = command;

    // Create new user object from User model
    const user = new User();
    user.userType = userType;
    user.isUserPermitted = isUserPermitted;

    return this.repository.save(user);
  }
}
