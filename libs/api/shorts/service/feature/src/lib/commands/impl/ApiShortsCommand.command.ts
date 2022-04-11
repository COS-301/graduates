import { ShortCreateInput } from '@graduates/api/shorts/api/shared/entities/data-access';

export class CreateShortCommand {
  constructor(
    public readonly short: ShortCreateInput,
    public readonly userId: string
  ) {}
}
