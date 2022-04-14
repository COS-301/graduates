import { ShortCreateTagInput } from '@graduates/api/shorts/api/shared/entities/data-access';

export class CreateTagCommand {
  constructor(public readonly tag: ShortCreateTagInput) {}
}

export class UpdateTagsCommand {
  constructor(public readonly tag: string, public readonly newTag: string) {}
}

export class UpdateTagByShortCommand {
  constructor(
    public readonly shortId: string,
    public readonly tag: string,
    public readonly newTag: string
  ) {}
}

export class DeleteTagsCommand {
  constructor(public readonly tag: string) {}
}

export class DeleteTagsByShortCommand {
  constructor(public readonly shortId: string) {}
}

export class DeleteTagByShortTagCommand {
  constructor(public readonly shortId: string, public readonly tag: string) {}
}
