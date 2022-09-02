const {gql} = require('apollo-server-express');

const typeDefs = gql`
    enum UserTypes {
        MEMBER
        TRAINER
        OWNER
        ADMIN
    }
    
    enum Countries {
        RO
    }
    
    type User {
        id: ID!
        role: UserTypes!
        email: String!
        name: String
        surname: String
        country: Countries
        phoneNumber: String
    }
    
    type Query {
        users: [User]
        user(id: ID, email: String): User
    }
    
    type Mutation {
        addUser(role: UserTypes, email: String): User 
    }
`;

module.exports = {
    typeDefs,
}