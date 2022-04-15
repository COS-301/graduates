/**
 * Class representing a GetAllTagsQuery query
 */
export class GetAllTagsQuery {}

/**
 * Class representing a GetTagsByShortId query
 * @param {string} id The id of the user to find the tags by
 */
export class GetTagsByShortIdQuery {
  constructor(public readonly id: string) {}
}
