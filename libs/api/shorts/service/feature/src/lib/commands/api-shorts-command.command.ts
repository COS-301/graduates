import {
  ShortCreateInput,
  ShortUpdateInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';

/**
 * Class representing a CreateShortCommand command
 * @param {ShortCreateInput} short The short to create
 * @param {string[]} tags Array of tags to be added to short
 * @param {string} userId The id of the user to create the short for
 */
export class CreateShortCommand {
  constructor(
    public readonly short: ShortCreateInput,
    public readonly userId: string
  ) {}
}

/**
 * Class representing a DeleteShortCommand command
 * @param {string} id The id of the short to delete
 */
export class DeleteShortCommand {
  constructor(public readonly id: string) {}
}

export class UpdateShortCommand {
  constructor(public readonly short: ShortUpdateInput) {}
}
