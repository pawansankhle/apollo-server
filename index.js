const { ApolloServer, AuthenticationError } = require("apollo-server");
const typeDefs  = require('./schema')
const resolvers  = require('./resolvers')
const dataSource  = require("./datasource/datasource")
const contextProvider =  require('./utils/context-provider');


const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
        dataSources: dataSource,
        context: contextProvider,
    }
);


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

 