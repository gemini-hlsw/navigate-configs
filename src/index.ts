import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { populateDb } from "./prisma/queries/main.js"

// Resolvers
import { AltairGuideLoopResolver } from "./graphql/resolvers/AltairGuideLoop.js"
import { AltairInstrumentResolver } from "./graphql/resolvers/AltairInstrument.js"
import { ConfigurationResolver } from "./graphql/resolvers/Configuration.js"
import { GemsGuideLoopResolver } from "./graphql/resolvers/GemsGuideLoop.js"
import { GemsInstrumentResolver } from "./graphql/resolvers/GemsInstrument.js"
import { GuideLoopResolver } from "./graphql/resolvers/GuideLoop.js"
import { InstrumentResolver } from "./graphql/resolvers/Instrument.js"
import { MechanismResolver } from "./graphql/resolvers/Mechanism.js"
import { RotatorResolver } from "./graphql/resolvers/Rotator.js"
import { SlewFlagsResolver } from "./graphql/resolvers/SlewFlags.js"
import { TargetResolver } from "./graphql/resolvers/Target.js"
import { UserResolver } from "./graphql/resolvers/User.js"

// TypeDefs
import { AltairGuideLoopTypeDefs } from "./graphql/types/AltairGuideLoop.js"
import { AltairInstrumentTypeDefs } from "./graphql/types/AltairInstrument.js"
import { ConfigurationTypeDefs } from "./graphql/types/Configuration.js"
import { GemsGuideLoopTypeDefs } from "./graphql/types/GemsGuideLoop.js"
import { GemsInstrumentTypeDefs } from "./graphql/types/GemsInstrument.js"
import { GuideLoopTypeDefs } from "./graphql/types/GuideLoop.js"
import { InstrumentTypeDefs } from "./graphql/types/Instrument.js"
import { MechanismTypeDefs } from "./graphql/types/Mechanism.js"
import { RotatorTypeDefs } from "./graphql/types/Rotator.js"
import { SlewFlagsTypeDefs } from "./graphql/types/SlewFlags.js"
import { TargetTypeDefs } from "./graphql/types/Target.js"
import { UserTypeDefs } from "./graphql/types/User.js"

import GraphQLJSON from "graphql-type-json"

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    ...AltairGuideLoopResolver.Query,
    ...AltairInstrumentResolver.Query,
    ...ConfigurationResolver.Query,
    ...GemsGuideLoopResolver.Query,
    ...GemsInstrumentResolver.Query,
    ...GuideLoopResolver.Query,
    ...InstrumentResolver.Query,
    ...MechanismResolver.Query,
    ...RotatorResolver.Query,
    ...SlewFlagsResolver.Query,
    ...TargetResolver.Query,
    ...UserResolver.Query,
  },
  Mutation: {
    ...AltairGuideLoopResolver.Mutation,
    ...AltairInstrumentResolver.Mutation,
    ...ConfigurationResolver.Mutation,
    ...GemsGuideLoopResolver.Mutation,
    ...GemsInstrumentResolver.Mutation,
    ...GuideLoopResolver.Mutation,
    ...InstrumentResolver.Mutation,
    ...MechanismResolver.Mutation,
    ...RotatorResolver.Mutation,
    ...SlewFlagsResolver.Mutation,
    ...TargetResolver.Mutation,
    ...UserResolver.Mutation,
  },
}

// Create and start ApolloServer
const server = new ApolloServer({
  typeDefs: [
    AltairGuideLoopTypeDefs,
    AltairInstrumentTypeDefs,
    ConfigurationTypeDefs,
    GemsGuideLoopTypeDefs,
    GemsInstrumentTypeDefs,
    GuideLoopTypeDefs,
    InstrumentTypeDefs,
    MechanismTypeDefs,
    RotatorTypeDefs,
    SlewFlagsTypeDefs,
    TargetTypeDefs,
    UserTypeDefs,
  ],
  resolvers,
})

if (process.argv.includes("populate")) {
  // Populate DB
  await populateDb()
} else {
  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.SERVER_PORT) || 4000 },
  })
  console.log(`🚀  Server ready at: ${url}`)
}
