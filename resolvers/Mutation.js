const {v4: uuid} = require("uuid")
exports.Mutation ={
   addUser: (parent, {input}, {users}) =>
   {
       const {name} = input
        const newUser ={
            id: uuid(),
            name
        }
        users.push(newUser);
        return newUser;
   },
};