/**
 * Class representing a GetAllShortsQuery query
 */
export class GetAllShortsQuery {}

/**
 * Class representing a GetShortById query
 * @param {string} id The id of the short to find
 */
export class GetShortByIdQuery {
  constructor(public readonly id: string) {}
}

/**
 * Class representing a GetShortByUser query
 * @param {string} userId The id of the user to find the shorts for
 */
export class GetShortByUserQuery {
  constructor(public readonly userId: string) {}
}

/**
 * Class representing a GetShortByTag query
 * @param {string} tagId The id of the tag to find the shorts for
 */
export class GetShortByTagQuery {
  constructor(public readonly tagId: string) {}
}

export class GetUserByIdQuery {
  constructor(public readonly id: string) {}
}
