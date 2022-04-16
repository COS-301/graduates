import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '@prisma/client';
import { GetEditPermissionCommand } from '../commands/get-edit-permission.command';

/*
create-user.handler.ts
*/
@CommandHandler(GetEditPermissionCommand)
export class GetEditPermissionHandler
  implements ICommandHandler<GetEditPermissionCommand>
{
  constructor(private repository: UserRepository) {}

  async execute(command: GetEditPermissionCommand): Promise<User> {
    // Destruct data from command object
    const { userType, isUserPermitted } = command;

    // Create new user object from User model
    const user = new User();
    user.userType = userType;
    user.isUserPermitted = isUserPermitted;

    return this.repository.save(user);
  }
}
