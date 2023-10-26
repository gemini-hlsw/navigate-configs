export const SelectedConfigurationTypeDefs = `#graphql
  type SelectedConfiguration {
    pk: Int
    configurationPk: Int
    configuration: Configuration
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    selectedConfiguration: SelectedConfiguration
  }

  type Mutation {
    updateSelectedConfiguration(
      pk: Int!
      configurationPk: Int!
    ): SelectedConfiguration
  }
`
