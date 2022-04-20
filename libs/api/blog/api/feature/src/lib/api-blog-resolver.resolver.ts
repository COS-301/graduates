import { Resolver, Query, Args, Mutation, ResolveField, Root } from '@nestjs/graphql';
import { Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogService } from '@graduates/api/blog/service/feature';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Resolver(() => Blog)
export class BlogResolver {
    constructor(
        private blogService: BlogService
    ) {}

    // Queries

    /**
     * Find a blog by id
     * @param {string} blogId The id of the blog to find
     * @return {Promise<Blog | null>} 
     */
    @Query(returns => Blog)
    async blogById(@Args('blogId', {type: () => String}) blogId: string): Promise<Blog | null> {
        return this.blogService.getBlogById(blogId);
    }

    /**
     * Find all blogs currently in the database
     * @return {Promise<Blog[]>} 
     */
    @Query(returns => [Blog])
    async allBlogs(): Promise<Blog[] | null> {
        return this.blogService.getAllBlogs();
    }

    /**
     * Find all archived blogs currently in the database
     * @return {Promise<Blog[]>} 
     */
    @Query(returns => [Blog])
    async allArchivedBlogs(): Promise<Blog[] | null> {
        return this.blogService.getAllArchivedBlogs();
    }

    /**
     * Find all blogs posted by the user with the given id
     * @param {string} userId The id of the user
     * @return {Promise<Blog[]>} 
     */
    @Query(returns => [Blog])
    async blogByUserId(@Args('userId', {type: () => String}) userId: string): Promise<Blog[] | null> {
        return this.blogService.getBlogByUserId(userId);
    }

    /**
     * Find the name of the user with the given id
     * @param {string} userId The id of the user
     * @return {Promise<AuthenticationUser | null>} 
     */
    @Query(returns => AuthenticationUser)
    async nameByUserId(@Args('userId', {type: () => String}) userId: string): Promise<AuthenticationUser | null> {
        return this.blogService.getNameByUserId(userId);
    }

    @Query(()=> String)
    pingBlog(){
        return "on";
    }
    // Mutations 

    /**
     * Create a new blog
     * @param {string} title The title of the blog to create
     * @param {string} content The content of the blog to create
     * @param {boolean} archived Whether the blog is archived or not
     * @param {string} userId The id of the user who posted the blog
     * @return {Promise<Blog>} 
     */
    @Mutation(returns => Blog)
    async createBlog( 
        @Args('title', {type: () => String}) title : string, 
        @Args('content', {type: () => String}) content : string, 
        @Args('archived', {type: () => Boolean}) archived : boolean, 
        @Args('userId', {type: () => String}) userId : string
    ) : Promise<Blog> {
        return this.blogService.createBlog(title, content, archived, userId);
    }

    /**
     * Update the title of a blog
     * @param {string} blogId The id of the blog to update
     * @param {string} title The new title for the blog
     * @return {Promise<Blog | null>} 
     */
    @Mutation(returns => Blog)
    async updateBlogTitle( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('title', {type: () => String}) title : string
    ) : Promise<Blog | null> {
        return this.blogService.updateBlogTitle(blogId, title);
    }

    /**
     * Update the content of a blog
     * @param {string} blogId The id of the blog to update
     * @param {string} content The new content for the blog
     * @return {Promise<Blog | null>} 
     */
    @Mutation(returns => Blog)
    async updateBlogContent( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('content', {type: () => String}) content : string
    ) : Promise<Blog | null> {
        return this.blogService.updateBlogContent(blogId, content);
    }

    /**
     * Update the archived status of a blog
     * @param {string} blogId The id of the blog to update
     * @param {boolean} archived The new archived status for the blog
     * @return {Promise<Blog | null>} 
     */
    @Mutation(returns => Blog)
    async updateBlogArchived( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('archived', {type: () => Boolean}) archived : boolean
    ) : Promise<Blog | null> {
        return this.blogService.updateBlogArchived(blogId, archived);
    }

    /**
     * Delete a blog
     * @param {string} blogId The id of the blog to delete
     * @return {Promise<string>} 
     */
    @Mutation(returns => String)
    async deleteBlog(@Args('blogId', {type: () => String}) blogId : string) : Promise<string> {
        return this.blogService.deleteBlog(blogId);
    }
}

@Resolver(() => BlogComment)
export class BlogCommentResolver {
    constructor(
        private blogService: BlogService
    ) {}

    // Queries

    /**
     * Find all comments currently in the database
     * @return {Promise<BlogComment[]>} 
     */
    @Query(returns => [BlogComment])
    async allComments(): Promise<BlogComment[] | null> {
        return this.blogService.getAllComments();
    }

    /**
     * Find all comments posted on a blog with a given blogId
     * @param {string} blogId The id of the blog to find comments on
     * @return {Promise<BlogComment[]>} 
     */
    @Query(returns => [BlogComment])
    async commentsByBlogId(@Args('blogId', {type: () => String}) blogId: string): Promise<BlogComment[] | null> {
        return this.blogService.getCommentsByBlogId(blogId);
    }

    /**
     * Find a comment by id
     * @param {string} commentId The id of the comment to find
     * @return {Promise<BlogComment>} 
     */
    @Query(returns => [BlogComment])
    async commentsByCommentId(@Args('commentId', {type: () => String}) commentId: string): Promise<BlogComment | null> {
        return this.blogService.getCommentByCommentId(commentId);
    }

    // Mutations

    /**
     * Create a comment
     * @param {string} blogId The id of the blog the comment is made on
     * @param {string} userId The id of the user who posted the comment
     * @param {string} content The  content of the comment
     * @return {Promise<BlogComment | null>} 
     */
    @Mutation(returns => BlogComment)
    async createComment( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('userId', {type: () => String}) userId : string, 
        @Args('content', {type: () => String}) content : string
    ) : Promise<BlogComment | null> {
        return this.blogService.createComment(blogId, userId, content);
    }

    /**
     * Update the content of a comment
     * @param {string} commentId The id of the comment to update
     * @param {string} content The new content of the comment
     * @return {Promise<string>} 
     */
    @Mutation(returns => String)
    async updateComment( 
        @Args('titcommentIdle', {type: () => String}) commentId : string, 
        @Args('commentContent', {type: () => String}) commentContent : string
    ) : Promise<string> {
        return this.blogService.updateComment(commentId, commentContent);
    }

    /**
     * Delete a comment
     * @param {string} commentId The id of the comment to delete
     * @return {Promise<string>} 
     */
    @Mutation(returns => String)
    async deleteComment(@Args('commentId', {type: () => String}) commentId : string) : Promise<string> {
        return this.blogService.deleteComment(commentId);
    }

    /**
     * Delete all comments on a blog
     * @param {string} blogId The id of the blog to have comments deleted
     * @return {Promise<string>} 
     */
    @Mutation(returns => String)
    async deleteCommentsByBlogId(@Args('blogId', {type: () => String}) blogId : string) : Promise<string> {
        return this.blogService.deleteCommentsByBlogId(blogId);
    }
}
@Resolver(() => BlogMedia)
export class BlogMediaResolver {
    constructor(
        private blogService: BlogService
    ) {}

    // Queries

    /**
     * Find all media used on a blog with a given blogId
     * @param {string} blogId The id of the blog
     * @return {Promise<BlogMedia[]>} 
     */
    @Query(returns => [BlogMedia])
    async mediaByBlogId(@Args('blogId', {type: () => String}) blogId: string): Promise<BlogMedia[] | null> {
        return this.blogService.getMediaByBlogId(blogId);
    }

    // Mutations

    /**
     * Create a blog media
     * @param {string} blogId The id of the blog the media is used on
     * @param {string} media The url of media
     * @return {Promise<BlogMedia | null>} 
     */
    @Mutation(returns => BlogMedia)
    async createMedia( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('media', {type: () => String}) media : string
    ) : Promise<BlogMedia | null> {
        return this.blogService.createMedia(blogId, media);
    }
}