export const GuideProbeTypeDefs = `#graphql

  type GuideProbe {
    pk: Int                   # Primary Key
    probe: String             # Probe Name
    selectedTarget: Int       # Selected Target PK
    targets: [Target]         # List of targets
    observation: Observation  # The related observation
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    guideProbe(pk: Int, probe: String): GuideProbe
    guideProbes: [GuideProbe]
  }

  type Mutation {
    createGuideProbe(
      probe: String!
      selectedTarget: Int
      observationPk: Int
    ): GuideProbe
  }
`
