const {gql} = require("apollo-server");
exports.typeDefs = gql `
 type Query {
     hello: String
     blogs: [Blog] #For multiple blogs
     blog(id: ID!): Blog #For one blog
     users: [User]
     user(id: ID): User
 }   
 type Mutation{
     addUser(input: AddUserInput): User
 }
 type Blog{
     id: ID!
     title: String!
     img: String
     body: String
     userId: String!
     user: User
 }
 type User{
     id: ID!
     name: String!
     surname: String
     blogs: [Blog]
 }
 input AddUserInput{
     name: String
 }
`;