export const ObservationTypeDefs = `#graphql
  type Observation {
    pk: Int                         # Primary Key
    id: String                      # Observation ID
    name: String                    # Name of the observation
    selectedTarget: Int             # Selected target pk
    selectedProbe: String           # Selected Probe
    configurations: [Configuration] # List of configurations
    guideProbes: [GuideProbe]       # List of guide probes
    targets: [Target]               # List of targets
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    observation(pk: Int, id: String, name: String): Observation
    observations: [Observation]
  }

  input TargetInput {
    pk: Int             # Primary Key
    id: String          # Target ID
    name: String        # Name of the target
    ra: Float           # Right Ascention
    az: Float           # Azimuth
    el: Float           # Elevation
    dec: Float          # Declination
    epoch: String       # Epoch of target
    type: TargetType    # FIXED | SCIENCE | BLINDOFFSET | OIWFS | PWFS1 | PWFS2
    createdAt: String   # Datetime when it was created
  }

  type Mutation {
    createObservation(
      id: String!
      name: String!
      selectedProbe: String
      selectedTarget: Int
    ): Observation

    updateObservation(
      id: String!
      name: String!
      selectedProbe: String
      selectedTarget: Int
      targets: [TargetInput]
    ): Observation

    updateObservationSelectedProbe(
      pk: Int!
      selectedProbe: String!
    ): Observation

    updateObservationSelectedTarget(
      pk: Int!
      selectedTarget: Int!
    ): Observation
  }
`
