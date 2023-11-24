export const RotatorTypeDefs = `#graphql
  enum TrackingType {
    TRACKING
    FIXED
  }

  type Rotator {
    pk: Int                         # Record primary key
    angle: Float                    # Rotator angle
    tracking: TrackingType          # Tracking mode
    configurations: [Configuration] # List of posible configurations
  }

  type Query {
    rotator(
      pk: Int
    ): Rotator
  }

  type Mutation {
    updateRotator(
      pk: Int!                # Primary key
      angle: Float            # Rotator angle
      tracking: TrackingType  # Tracking mode
    ): Rotator
  }
`
