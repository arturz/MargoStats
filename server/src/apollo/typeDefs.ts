import { gql } from 'apollo-server-express'

export default gql`
  directive @rateLimit(
    max: Int,
    window: String,
    message: String,
    identityArgs: [String],
    arrayLengthField: String
  ) on FIELD_DEFINITION

  type Query {
    worlds: [World]!
    dailyStatsSummaries(month: String!, world: String!, private: Boolean!): [DailyStatsSummary]!
    dailyStatsTopSummaries(month: String!): [DailyStatsSummary]!
    charactersWithMinutesPlayed(month: String!, profile: Int!): [CharactersWithMinutesPlayed]! @rateLimit(window: "60s", max: 10, message: "Za dużo zapytań. Spróbuj później.")
  }

  type World {
    world: String!
    private: Boolean!
  }

  type DailyStatsSummary {
    month: String!
    world: String!
    private: Boolean!
    index: Int!
    nick: String!
    minutes: Int!
  }

  type MinutesPlayed {
    day: String!
    minutes: Int!
  }

  type CharactersWithMinutesPlayed {
    world: String!
    private: Boolean!
    nick: String!
    minutes: [MinutesPlayed]!
  }
`