//const {blogs} = require("../db");
exports.User = {
    blogs: (parent, args, {blogs}) =>
    {
        const userId = parent.id;
        return blogs.filter(blog => blog.userId === userId)
    }
};