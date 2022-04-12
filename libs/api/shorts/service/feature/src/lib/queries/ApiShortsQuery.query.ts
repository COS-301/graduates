export class GetAllShortsQuery {}

export class GetShortByIdQuery {
  constructor(public readonly id: string) {}
}

export class GetShortByUserQuery {
  constructor(public readonly userId: string) {}
}

export class GetShortByTagQuery {
  constructor(public readonly tagId: string) {}
}
