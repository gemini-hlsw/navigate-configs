import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// Resolvers
import { ConfigurationResolver } from "./graphql/resolvers/Configuration"
import { InstrumentResolver } from "./graphql/resolvers/Instrument"
import { RotatorResolver } from "./graphql/resolvers/Rotator"
import { SlewFlagsResolver } from "./graphql/resolvers/SlewFlags"
import { TargetResolver } from "./graphql/resolvers/Target"
import { UserResolver } from "./graphql/resolvers/User"

// TypeDefs
import { ConfigurationTypeDefs } from "./graphql/types/Configuration"
import { InstrumentTypeDefs } from "./graphql/types/Instrument"
import { RotatorTypeDefs } from "./graphql/types/Rotator"
import { SlewFlagsTypeDefs } from "./graphql/types/SlewFlags"
import { TargetTypeDefs } from "./graphql/types/Target"
import { UserTypeDefs } from "./graphql/types/User"

import GraphQLJSON from "graphql-type-json"

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    ...ConfigurationResolver.Query,
    ...InstrumentResolver.Query,
    ...RotatorResolver.Query,
    ...SlewFlagsResolver.Query,
    ...TargetResolver.Query,
    ...UserResolver.Query,
  },
  Mutation: {
    ...ConfigurationResolver.Mutation,
    ...InstrumentResolver.Mutation,
    ...RotatorResolver.Mutation,
    ...SlewFlagsResolver.Mutation,
    ...TargetResolver.Mutation,
    ...UserResolver.Mutation,
  },
}

// Create and start ApolloServer
const server = new ApolloServer({
  typeDefs: [
    ConfigurationTypeDefs,
    InstrumentTypeDefs,
    RotatorTypeDefs,
    SlewFlagsTypeDefs,
    TargetTypeDefs,
    UserTypeDefs,
  ],
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: parseInt(process.env.SERVER_PORT) ?? 4000 },
})

// Populate | Get Info from database
import { main } from "./prisma/queries/main"
await main()

console.log(`🚀  Server ready at: ${url}`)
