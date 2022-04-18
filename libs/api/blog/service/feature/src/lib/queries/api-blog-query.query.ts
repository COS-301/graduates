// Blog

export class GetBlogByIdQuery {
    constructor (
        public readonly blogId
    ) {}
}

export class GetAllBlogsQuery {

}

export class GetAllArchivedBlogsQuery {

}

export class GetBlogByUserIdQuery {
    constructor (
        public readonly userId
    ) {}
}

export class GetNameByUserIdQuery {
    constructor (
        public readonly userId
    ) {}
}

// Comments

export class GetAllCommentsQuery {

}

export class GetCommentsByBlogIdQuery {
    constructor (
        public readonly blogId
    ) {}
}

export class GetCommentByCommentIdQuery {
    constructor (
        public readonly commentId
    ) {}
}

// Media

export class GetMediaByBlogIdQuery {
    constructor (
        public readonly blogId
    ) {}
}