import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateShortCommand } from '../impl/ApiShortsCommand.command';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';

@CommandHandler(CreateShortCommand)
export class CreateShortHandler implements ICommandHandler<CreateShortCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: CreateShortCommand) {
    const { short, userId } = command;

    return this.repository.createShort(short, userId);
  }
}
