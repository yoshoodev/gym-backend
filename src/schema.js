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
        #address
        street: String
        number: String
        city: String
        postalCode: String
        branch: Branch
    }
    
    type Gym {
        id: ID!
        name: String
        country: Countries
        branches: [Branch]
    }
    
    type Branch {
        id: ID!
        gym: Gym!
        name: String!
        members: [User]
        phoneNumber: String
        street: String
        number: String
        city: String
        country: Countries
        postalCode: String
    }
    
    type Query {
        "Returns all users."
        users: [User]
        "Returns all branches."
        branches: [Branch]
        "Returns all gyms."
        gyms: [Gym]
        "Queries User by ID or email. ID is preferred as it uses findUnique."
        user(id: ID, email: String): User
        "Queries Branch by ID."
        branch(id: ID): Branch
    }
    
    type Mutation {
        addUser(role: UserTypes, name: String, surname: String, email: String!,country: Countries, phoneNumber: String, street: String, number: String, city: String, postalCode: String, branchId: String): User
        addGym(name: String!, country: Countries): Gym
        
    }
`;

module.exports = {
    typeDefs,
}