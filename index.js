const { ApolloServer } = require('apollo-server');
const { userSchema, userResolvers } = require('./Schemas/user')
const { bookSchema, bookResolvers} = require('./Schemas/book')
const { authorSchema, authorResolvers} = require('./Schemas/author')
const { publisherSchema, publisherResolvers } = require('./Schemas/publisher')
const { commonSchema } = require('./Schemas/common')
const { querySchema } = require('./gqlRootTypes')

const server = new ApolloServer({
    typeDefs: [
        querySchema,
        commonSchema,
        userSchema,
        authorSchema,
        publisherSchema,
        bookSchema,
    ],
    resolvers: [
        userResolvers,
        bookResolvers,
        authorResolvers,
        publisherResolvers
    ]
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});