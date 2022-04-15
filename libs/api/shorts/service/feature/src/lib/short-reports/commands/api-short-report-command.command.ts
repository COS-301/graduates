import { ShortReportInput } from '@graduates/api/shorts/api/shared/entities/data-access';

export class CreateReportCommand {
  constructor(
    public readonly report: ShortReportInput,
    public readonly userId: string
  ) {}
}

export class DeleteReportCommand {
  constructor(
    public readonly shortId: string,
    public readonly userId: string
  ) {}
}
