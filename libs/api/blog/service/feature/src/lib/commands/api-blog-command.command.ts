// Blog

export class CreateBlogCommand {
  constructor(
    public readonly title, 
    public readonly content, 
    public readonly archived, 
    public readonly userId 
  ) {}
}

export class UpdateBlogTitleCommand {
  constructor(
    public readonly blogId, 
    public readonly title
  ) {}
}

export class UpdateBlogContentCommand {
  constructor(
    public readonly blogId, 
    public readonly content
  ) {}
}

export class UpdateBlogArchivedCommand {
  constructor(
    public readonly blogId, 
    public readonly archived
  ) {}
}

export class DeleteBlogCommand {
  constructor(
    public readonly blogId
  ) {}
}

// Comments

export class CreateCommentCommand {
  constructor(
    public readonly id, 
    public readonly blogId, 
    public readonly userId, 
    public readonly content
  ) {}
}

export class UpdateCommentCommand {
  constructor(
    public readonly commentId, 
    public readonly commentContent
  ) {}
}

export class DeleteCommentCommand {
  constructor(
    public readonly commentId
  ) {}
}

export class DeleteCommentsByBlogIdCommand {
  constructor(
    public readonly blogId
  ) {}
}

// Media

export class CreateMediaCommand {
  constructor(
    public readonly blogId, 
    public readonly media
  ) {}
}