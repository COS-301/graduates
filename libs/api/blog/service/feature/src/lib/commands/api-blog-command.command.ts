export class CreateBlogCommand {
  constructor(
    public readonly title, 
    public readonly content, 
    public readonly archived, 
    public readonly userId 
  ) {}
}
