//const {users} = require("../db");
exports.Blog = {
    user: (parent, args, {users})=>
    {
        const userId = parent.userId;
        return users.find(user => user.id === userId)
    }
};