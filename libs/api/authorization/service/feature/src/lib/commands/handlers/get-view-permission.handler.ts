import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetViewPermissionCommand } from '../commands/get-view-permission.command';

/*
create-user.handler.ts
*/
@CommandHandler(GetViewPermissionCommand)
export class GetViewPermissionHandler
  implements ICommandHandler<GetViewPermissionCommand>
{
  constructor(private repository: UserRepository) {}

  async execute(command: GetViewPermissionCommand): Promise<User> {
    // Destruct data from command object
    const { userType, isUserPermitted } = command;

    // Create new user object from User model
    const user = new User();
    user.userType = userType;
    user.isUserPermitted = isUserPermitted;

    return this.repository.save(user);
  }
}
