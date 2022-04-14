import { BlogCreateInput } from '@graduates/api/blog/api/shared/entities/data-access';

/**
 * Class representing a CreateBlogCommand command

 */
export class CreateBlogCommand {
  constructor(
    public readonly blog: BlogCreateInput,

  ) {}
}
