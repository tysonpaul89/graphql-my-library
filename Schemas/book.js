const { gql } = require('apollo-server')
const books = [
    {
        id: 1,
        title: 'The Hobbit',
        publish_date: '1937-09-21',
        summary: 'In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',
    },
    {
        id: 2,
        title: 'A Game of Thrones',
        publish_date: '1996-08-06',
        summary: `Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.
            Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.`,
    },
]

module.exports.bookSchema = gql`
type Book {
    id: ID!
    title: String!
    author: [Author!]!
    summary: String!
    genre: Genre!
    publish_date: String!
    publisher: Publisher!
}
`

module.exports.bookResolvers = {
    Query: {
        books: () => books
    }
}