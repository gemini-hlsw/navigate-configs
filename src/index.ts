import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// Resolvers
import { ConfigurationResolver } from "./graphql/resolvers/Configuration"
import { GuideProbeResolver } from "./graphql/resolvers/GuideProbe"
import { InstrumentResolver } from "./graphql/resolvers/Instrument"
import { ObservationResolver } from "./graphql/resolvers/Observation"
import { SelectedConfigurationResolver } from "./graphql/resolvers/SelectedConfiguration"
import { TargetResolver } from "./graphql/resolvers/Target"
import { UserResolver } from "./graphql/resolvers/User"

// TypeDefs
import { ConfigurationTypeDefs } from "./graphql/types/Configuration"
import { GuideProbeTypeDefs } from "./graphql/types/GuideProbe"
import { InstrumentTypeDefs } from "./graphql/types/Instrument"
import { ObservationTypeDefs } from "./graphql/types/Observation"
import { SelectedConfigurationTypeDefs } from "./graphql/types/SelectedConfiguration"
import { TargetTypeDefs } from "./graphql/types/Target"
import { UserTypeDefs } from "./graphql/types/User"

import GraphQLJSON from "graphql-type-json"

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    ...ConfigurationResolver.Query,
    ...GuideProbeResolver.Query,
    ...InstrumentResolver.Query,
    ...ObservationResolver.Query,
    ...SelectedConfigurationResolver.Query,
    ...TargetResolver.Query,
    ...UserResolver.Query,
  },
  Mutation: {
    ...ConfigurationResolver.Mutation,
    ...GuideProbeResolver.Mutation,
    ...InstrumentResolver.Mutation,
    ...ObservationResolver.Mutation,
    ...SelectedConfigurationResolver.Mutation,
    ...TargetResolver.Mutation,
    ...UserResolver.Mutation,
  },
}

// Create and start ApolloServer
const server = new ApolloServer({
  typeDefs: [
    ConfigurationTypeDefs,
    GuideProbeTypeDefs,
    InstrumentTypeDefs,
    ObservationTypeDefs,
    SelectedConfigurationTypeDefs,
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
