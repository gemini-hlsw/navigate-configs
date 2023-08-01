export const TargetTypeDefs = `#graphql
  scalar JSON

  type Target {
    pk: Int               # Primary Key
    id: String            # Target ID
    name: String          # Name of the target
    raAz: String          # RA or Az coordinate
    decEl: String         # Dec or El coorinate
    epoch: String         # Epoch of target
    type: String          # OIWFS | PWFS1 | PWFS2 | Base
    coordSystem: String   # Celestial | Horizontal
    createdAt: String     # Datetime when it was created
    blindTargets: JSON    # Array with blind offset targets
    guideTargets: JSON    # Array with guide targets
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    target: Target,
    allFixedTargets: [Target]
  }

  type Mutation {
    createTarget(
      id: String!
      name: String!
      raAz: String!
      decEl: String!
      epoch: String!
      type: String!
      coordSystem: String!
      blindTargets: JSON
      guideTargets: JSON
    ): Target
  }
`