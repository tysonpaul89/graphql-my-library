const { gql } = require('apollo-server')
module.exports.querySchema = gql`
type Query {
    users: [User]
    books: [Book]
    authors: [Author]
    publishers: [Publisher]
}
`