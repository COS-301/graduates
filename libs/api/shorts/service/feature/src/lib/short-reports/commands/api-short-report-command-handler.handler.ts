import {
  CreateReportCommand,
  DeleteReportCommand,
} from './api-short-report-command.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ShortReport } from '@prisma/client';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';

@CommandHandler(CreateReportCommand)
export class CreateReportHandler
  implements ICommandHandler<CreateReportCommand>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: CreateReportCommand): Promise<ShortReport | null> {
    const { report, userId } = command;

    return this.repository.reportShort(report, userId);
  }
}

@CommandHandler(DeleteReportCommand)
export class DeleteReportHandler
  implements ICommandHandler<DeleteReportCommand>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: DeleteReportCommand): Promise<ShortReport | null> {
    const { shortId, userId } = command;

    return this.repository.deleteReport(shortId, userId);
  }
}
