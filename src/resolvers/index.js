const { Query } = require("./query.js");
const { Mutation } = require("./mutations.js");

const resolvers = {
    Query,
    Mutation,
};

module.exports = {
    resolvers,
};

