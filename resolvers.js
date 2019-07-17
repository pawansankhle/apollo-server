
const resolvers = {
    Query: {
        users: (_, __, { dataSources } ) => {
            return dataSources.UserAPI.getAllUser();
        }
    },
}

module.exports = resolvers;