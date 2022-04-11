import {
  Short,
  ShortCreateInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  GetAllShortsQuery,
  GetShortByIdQuery,
} from './queries/impl/ApiShortsQuery.query';
import { CreateShortCommand } from './commands/impl/ApiShortsCommand.command';

@Injectable()
export class ShortsService {
  constructor(
    private readonly queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}

  async findAllShorts(): Promise<Short[]> {
    return await this.queryBus.execute(new GetAllShortsQuery());
  }

  async findShortById(id: string): Promise<Short> {
    return await this.queryBus.execute(new GetShortByIdQuery(id));
  }

  async createShort(short: ShortCreateInput, userId: string): Promise<Short> {
    return await this.commandBus.execute(new CreateShortCommand(short, userId));
  }
}
