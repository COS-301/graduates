const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { User } = require("./resolvers/User");
const { Blog } = require("./resolvers/Blog");
const {users, blogs} = require("./db");


const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation,
        User,
        Blog
    },
    context:{
        users,
        blogs
    }
});

server.listen().then(({url})=>{
    console.log("server is ready at "+ url);
})