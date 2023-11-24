export const ConfigurationTypeDefs = `#graphql
  type Configuration {
    pk: Int
    name: String
    instrument: Instrument
    observation: Observation
    rotator: Rotator
    users: [User]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    configuration(pk: Int, name: String): Configuration
    configurations(pk: Int, name: String): [Configuration]
  }

  type Mutation {
    createConfiguration(
      name: String!
      observationPk: Int
      instrumentPk: Int
      rotatorPk: Int
    ): Configuration

    updateConfiguration(
      pk: Int!
      name: String!
      observationPk: Int
      instrumentPk: Int
      rotatorPk: Int
    ): Configuration
  }
`
