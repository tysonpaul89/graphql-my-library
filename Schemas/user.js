const { gql } = require('apollo-server')
const { books }  = require('./book')
const users = [
    { id: 1, name: 'Tyson', email: 'tyson@mail.com', collections: [1]},
    { id: 2, name: 'Joe', email: 'joe@mail.com', collections: [1, 2]},
    { id: 3, name: 'Jill', email: 'jill@mail.com', collections: [1, 2]},
]

module.exports.userSchema = gql`
type User {
    id: ID!
    name: String!
    email: String!
    collections: [Book!]!
}
`

module.exports.userResolvers = {
    Query: {
        users: () => users
    },
    User: {
        collections: parent => {
            return books.filter(book => {
                return parent.collections.includes(book.id)
            })
        }
    }
}