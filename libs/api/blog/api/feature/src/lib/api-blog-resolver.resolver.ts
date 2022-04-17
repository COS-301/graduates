import { Resolver, Query, Args, Mutation, ResolveField, Root } from '@nestjs/graphql';
import { Blog, BlogComment, BlogMedia } from '@graduates/api/blog/api/shared/entities/data-access';
import { BlogService } from '@graduates/api/blog/service/feature';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Blog)
export class BlogResolver {
    constructor(
        private blogService: BlogService
    ) {}

    // Queries

    @Query(returns => Blog)
    async blogById(@Args('blogId', {type: () => String}) blogId: string): Promise<Blog | null> {
        return this.blogService.getBlogById(blogId);
    }

    @Query(returns => [Blog])
    async allBlogs(): Promise<Blog[] | null> {
        return this.blogService.getAllBlogs();
    }

    @Query(returns => [Blog])
    async allArchivedBlogs(): Promise<Blog[] | null> {
        return this.blogService.getAllArchivedBlogs();
    }

    @Query(returns => [Blog])
    async blogByUserId(@Args('userId', {type: () => String}) userId: string): Promise<Blog[] | null> {
        return this.blogService.getBlogByUserId(userId);
    }

    // Mutations 

    @Mutation(returns => Blog)
    async createBlog( 
        @Args('title', {type: () => String}) title : string, 
        @Args('content', {type: () => String}) content : string, 
        @Args('archived', {type: () => Boolean}) archived : boolean, 
        @Args('userId', {type: () => String}) userId : string
    ) : Promise<Blog> {
        return this.blogService.createBlog(title, content, archived, userId);
    }

    @Mutation(returns => Blog)
    async updateBlogTitle( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('title', {type: () => String}) title : string
    ) : Promise<string> {
        return this.blogService.updateBlogTitle(blogId, title);
    }

    @Mutation(returns => Blog)
    async updateBlogContent( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('content', {type: () => String}) content : string
    ) : Promise<Blog | null> {
        return this.blogService.updateBlogContent(blogId, content);
    }

    @Mutation(returns => Blog)
    async updateBlogArchived( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('archived', {type: () => Boolean}) archived : boolean
    ) : Promise<Blog | null> {
        return this.blogService.updateBlogArchived(blogId, archived);
    }

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

    @Query(returns => [BlogComment])
    async allComments(): Promise<BlogComment[] | null> {
        return this.blogService.getAllComments();
    }

    @Query(returns => [BlogComment])
    async commentsByBlogId(@Args('blogId', {type: () => String}) blogId: string): Promise<BlogComment[] | null> {
        return this.blogService.getCommentsByBlogId(blogId);
    }

    @Query(returns => [BlogComment])
    async commentsByCommentId(@Args('commentId', {type: () => String}) commentId: string): Promise<BlogComment | null> {
        return this.blogService.getCommentByCommentId(commentId);
    }

    // Mutations

    @Mutation(returns => BlogComment)
    async createComment( 
        @Args('id', {type: () => String}) id : string, 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('userId', {type: () => String}) userId : string, 
        @Args('content', {type: () => String}) content : string
    ) : Promise<BlogComment | null> {
        return this.blogService.createComment(id, blogId, userId, content);
    }

    @Mutation(returns => String)
    async updateComment( 
        @Args('titcommentIdle', {type: () => String}) commentId : string, 
        @Args('commentContent', {type: () => String}) commentContent : string
    ) : Promise<string> {
        return this.blogService.updateComment(commentId, commentContent);
    }

    @Mutation(returns => String)
    async deleteComment(@Args('commentId', {type: () => String}) commentId : string) : Promise<string> {
        return this.blogService.deleteComment(commentId);
    }

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

    @Query(returns => [BlogMedia])
    async mediaByBlogId(@Args('blogId', {type: () => String}) blogId: string): Promise<BlogMedia[] | null> {
        return this.blogService.getMediaByBlogId(blogId);
    }

    // Mutations

    @Mutation(returns => BlogMedia)
    async createMedia( 
        @Args('blogId', {type: () => String}) blogId : string, 
        @Args('media', {type: () => String}) media : string
    ) : Promise<BlogMedia | null> {
        return this.blogService.createMedia(blogId, media);
    }
}