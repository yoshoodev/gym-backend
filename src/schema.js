const {gql} = require('apollo-server-express');

const typeDefs = gql`
    enum UserTypes {
        MEMBER
        TRAINER
        ADMIN
    }
    
    type User {
        id: ID!
        role: UserTypes!
        name: String
        surname: String
        email: String!
    }
    
    type Query {
        users: [User]
    }
    
    type Mutation {
        addUser(email: String!, name: String, surname: String) : User
    }
    
`;

module.exports = typeDefs;