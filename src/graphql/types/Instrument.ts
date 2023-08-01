export const InstrumentTypeDefs = `#graphql
  scalar JSON

  type Instrument {
    id: Int             # Record Id
    name: String        # Instrument name
    iaa: Float          # Instrument Alignment Angle
    issPort: Int        # Instrument Support Structure port
    focusOffset: Float  # Focus offset
    wfs: String         # Asociated Wavefront Sensor
    originX: Float      # Origin of instrument X position
    originY: Float      # Origin of instrument Y position
    ao: Boolean         # Adaptive Optics is being used?
    extraParams: JSON   # Instrument dependent set of parameters
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    instrument(
      name: String
      issPort: Int
      wfs: String
      extraParams: JSON
    ): Instrument

    currentInstrument: Instrument
  }

  type Mutation {
    createInstrument(
      name: String!       # Instrument name
      iaa: Float          # Instrument Alignment Angle
      issPort: Int!       # Instrument Support Structure port
      focusOffset: Float  # Focus offset
      wfs: String         # Asociated Wavefront Sensor
      originX: Float      # Origin of instrument X position
      originY: Float      # Origin of instrument Y position
      ao: Boolean         # Adaptive Optics is being used?
      extraParams: JSON   # Instrument dependent set of parameters
    ): Instrument

    updateCurrentInstrument(
      name: String        # Instrument name
      iaa: Float          # Instrument Alignment Angle
      issPort: Int        # Instrument Support Structure port
      focusOffset: Float  # Focus offset
      wfs: String         # Asociated Wavefront Sensor
      originX: Float      # Origin of instrument X position
      originY: Float      # Origin of instrument Y position
      ao: Boolean         # Adaptive Optics is being used?
      extraParams: JSON   # Instrument dependent set of parameters
    ): Instrument
  }
`