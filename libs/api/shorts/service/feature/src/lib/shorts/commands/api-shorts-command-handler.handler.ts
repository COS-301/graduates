import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CreateShortCommand,
  DeleteShortCommand,
  UpdateShortCommand,
} from './api-shorts-command.command';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { Short } from '@prisma/client';

/**
 * Class to implement the CreateShort command for the ShortsService
 * @param {CreateShortCommand} command The command containing the short to be created and the user id to create the short for
 * @return {Promise<Short | null>}
 */
@CommandHandler(CreateShortCommand)
export class CreateShortHandler implements ICommandHandler<CreateShortCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: CreateShortCommand): Promise<Short | null> {
    const { short, userId } = command;

    return this.repository.createShort(short, userId);
  }
}

/**
 * Class to implement the DeleteShort command for the ShortsService
 * @param {DeleteShortCommand} command The command containing the id of the short to be deleted
 * @return {Promise<boolean>} True if the short was deleted successfully, false otherwise
 */
@CommandHandler(DeleteShortCommand)
export class DeleteShortHandler implements ICommandHandler<DeleteShortCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: DeleteShortCommand): Promise<Short | null> {
    const { id } = command;

    return this.repository.deleteShort(id);
  }
}

@CommandHandler(UpdateShortCommand)
export class UpdateShortHandler implements ICommandHandler<UpdateShortCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: UpdateShortCommand): Promise<Short | null> {
    const { short } = command;

    return this.repository.updateShort(short);
  }
}
