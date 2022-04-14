import {
  CreateTagCommand,
  UpdateTagsCommand,
  UpdateTagByShortCommand,
  DeleteTagsCommand,
  DeleteTagsByShortCommand,
  DeleteTagByShortTagCommand,
} from './api-short-tag-command.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ShortTag } from '@prisma/client';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';

@CommandHandler(CreateTagCommand)
export class CreateTagHandler implements ICommandHandler<CreateTagCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: CreateTagCommand): Promise<ShortTag | null> {
    const { tag } = command;

    return this.repository.createTag(tag);
  }
}

@CommandHandler(UpdateTagsCommand)
export class UpdateTagsHandler implements ICommandHandler<UpdateTagsCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: UpdateTagsCommand): Promise<string> {
    const { tag, newTag } = command;

    return this.repository.updateTags(tag, newTag);
  }
}

@CommandHandler(UpdateTagByShortCommand)
export class UpdateTagByShortHandler
  implements ICommandHandler<UpdateTagByShortCommand>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: UpdateTagByShortCommand): Promise<ShortTag> {
    const { shortId, tag, newTag } = command;

    return this.repository.updateTagByShort(shortId, tag, newTag);
  }
}

@CommandHandler(DeleteTagsCommand)
export class DeleteTagsHandler implements ICommandHandler<DeleteTagsCommand> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: DeleteTagsCommand): Promise<string> {
    const { tag } = command;

    return this.repository.deleteTags(tag);
  }
}

@CommandHandler(DeleteTagsByShortCommand)
export class DeleteTagsByShortHandler
  implements ICommandHandler<DeleteTagsByShortCommand>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: DeleteTagsByShortCommand): Promise<string> {
    const { shortId } = command;

    return this.repository.deleteTagsByShortId(shortId);
  }
}

@CommandHandler(DeleteTagByShortTagCommand)
export class DeleteTagByShortTagHandler
  implements ICommandHandler<DeleteTagByShortTagCommand>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(command: DeleteTagByShortTagCommand): Promise<ShortTag> {
    const { shortId, tag } = command;

    return this.repository.deleteTagByShortTag(shortId, tag);
  }
}
