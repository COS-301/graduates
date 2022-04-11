export class GetAllShortsQuery {}

export class GetShortByIdQuery {
  constructor(public readonly id: string) {}
}
