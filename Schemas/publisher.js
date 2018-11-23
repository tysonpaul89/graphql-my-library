const { gql } = require('apollo-server')

const publishers = [
    {
        id: 1,
        name: 'HarperCollins Publishers L.L.C',
        website: 'www.harpercollins.com'
    },
    {
        id: 2,
        name: 'Bantam Books',
        website: 'bantam-dell.atrandom.com'
    },
]

module.exports.publisherSchema = gql`
type Publisher {
    id: ID!
    name: String!
    website: String
}
`

module.exports.publisherResolvers = {
    Query: {
        publishers: () => publishers
    }
}