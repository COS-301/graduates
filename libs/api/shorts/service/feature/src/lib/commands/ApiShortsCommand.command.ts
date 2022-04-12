import { ShortCreateInput } from '@graduates/api/shorts/api/shared/entities/data-access';

/**
 * Class representing a CreateShortCommand command
 * @param {ShortCreateInput} short The short to create
 * @param {string[]} tags Array of tags to be added to short
 * @param {string} userId The id of the user to create the short for
 */
export class CreateShortCommand {
  constructor(
    public readonly short: ShortCreateInput,
    public readonly tags: string[],
    public readonly userId: string
  ) {}
}
