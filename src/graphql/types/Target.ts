export const TargetTypeDefs = `#graphql

  enum TargetType {
    FIXED
    SCIENCE
    BLINDOFFSET
    GUIDE
  }

  type RA {
    degrees: Float
    hms: String
  }

  type Dec {
    degrees: Float
    dms: String
  }

  type Az {
    degrees: Float
    dms: String
  }

  type El {
    degrees: Float
    dms: String
  }

  type Target {
    pk: Int             # Primary Key
    id: String          # Target ID
    name: String        # Name of the target
    ra: RA              # Right Ascention
    az: Az              # Azimuth
    el: El              # Elevation
    dec: Dec            # Declination
    epoch: String       # Epoch of target
    type: TargetType    # FIXED | SCIENCE | BLINDOFFSET | GUIDE
    createdAt: String   # Datetime when it was created
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    target(pk: Int, id: String, name: String): Target
    targets: [Target]
  }

  type Mutation {
    createTarget(
      id: String
      name: String!
      ra: Float
      az: Float
      dec: Float
      el: Float
      epoch: String
      type: TargetType!
    ): Target
  }
`
