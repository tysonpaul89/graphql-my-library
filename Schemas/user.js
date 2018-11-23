const { gql } = require('apollo-server')
const users = [
    { id: 1, name: 'Tyson', email: 'tyson@mail.com'},
    { id: 2, name: 'Joe', email: 'joe@mail.com'},
    { id: 3, name: 'Jill', email: 'jill@mail.com'},
]

module.exports.userSchema = gql`
type User {
    id: ID!
    name: String!
    email: String!
}
`

module.exports.userResolvers = {
    Query: {
        users: () => users
    }
}