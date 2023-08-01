import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'
import { UserResolver } from "./graphql/resolvers/User"
import { UserTypeDefs } from "./graphql/types/User"
import { TargetResolver } from "./graphql/resolvers/Target"
import { TargetTypeDefs } from "./graphql/types/Target"
import { InstrumentTypeDefs } from "./graphql/types/Instrument"
import { InstrumentResolver } from "./graphql/resolvers/Instrument"
import GraphQLJSON from 'graphql-type-json'

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    ...UserResolver.Query,
    ...TargetResolver.Query,
    ...InstrumentResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...TargetResolver.Mutation,
    ...InstrumentResolver.Mutation
  }
}

// Create and start ApolloServer
const server = new ApolloServer({
  typeDefs: [UserTypeDefs, TargetTypeDefs, InstrumentTypeDefs],
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: parseInt(process.env.SERVER_PORT) ?? 4000 },
})

console.log(`🚀  Server ready at: ${url}`);