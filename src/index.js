const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault} = require('apollo-server-core');
const express = require('express');
const http = require('http');
const { typeDefs } = require('./schema.js');


const { context } = require('./context.js');
const { resolvers } = require('./resolvers');


async function startApolloServer(typeDefs, resolvers, context) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: context,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers, context).then(() => {});

