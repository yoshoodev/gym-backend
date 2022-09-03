const {Query} = require("./query.js");
const {Mutation} = require("./mutations.js");
const {User} = require("./user.js");
const {Branch} = require("./branch");
const {Gym} = require("./gym");

const resolvers = {
    Query,
    Mutation,
    User,
    Branch,
    Gym
};

module.exports = {
    resolvers,
};

