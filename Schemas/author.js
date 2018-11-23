const { gql } = require('apollo-server')

const authors = [
    {
        id: 1,
        name: 'J.R.R. Tolkien',
        biography: `John Ronald Reuel Tolkien, CBE was an English writer, poet, WWI veteran (a First Lieutenant in the Lancashire Fusiliers, British Army), philologist, and university professor, best known as the author of the high fantasy classic works The Hobbit and The Lord of the Rings .`
    },
    {
        id: 2,
        name: 'George R.R. Martin',
        biography: `George Raymond Richard Martin, also known as GRRM, is an American novelist and short-story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer.`
    },
]

module.exports.authorSchema = gql`
type Author {
    id: ID!
    name: String!
    books: [Book!]!
    biography: String
}
`

module.exports.authorResolvers = {
    Query: {
        authors: () => authors
    }
}