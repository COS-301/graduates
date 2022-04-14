import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateShortCommand } from './api-shorts-command.command';
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
    const { short, tags, userId } = command;

    return this.repository.createShort(short, userId);
  }
}
