//const { blogs, users} = require("../db");
exports.Query ={
    hello: () =>
    {
        return "World!"
    },
    blogs: (parent, args, {blogs}) =>
    {
        return blogs;
    },
    blog:(parent, args, {blogs})=>
    {
        const blogId = args.id;
        const blog = blogs.find(blog => blog.id === blogId);
        if(!blog) return null;
        return blog;
    },
    users: (parent, args, {users}) =>
    {
        return users;
    },
    user: (parent, args, {users}) =>
    {
        const {id} = args;
        return users.find(user => user.id === id);
    },
};