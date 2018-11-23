const { gql } = require('apollo-server')

module.exports.commonSchema = gql`
enum Genre {
  DRAMA
  ADVENTURE
  COMEDY
  HORROR
}
`
