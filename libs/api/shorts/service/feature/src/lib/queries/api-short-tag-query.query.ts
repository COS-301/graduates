/**
 * Class representing a GetAllTagsQuery query
 */
export class GetAllTagsQuery {}

/**
 * Class representing a GetTagsByUserId query
 * @param {string} id The id of the user to find the tags by
 */
export class GetTagsByUserIdQuery {
  constructor(public readonly id: string) {}
}
