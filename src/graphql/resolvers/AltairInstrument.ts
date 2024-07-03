import { prisma } from "../../prisma/db.js"
import { Resolvers } from '../gen/index.js'

export const AltairInstrumentResolver: Resolvers = {
  Query: {
    altairInstrument: (_parent, args, _context, _info) => {
      return prisma.altairInstrument.findFirst({ where: args })
    },
  },
  Mutation: {
    updateAltairInstrument: (_parent, args, _context, _info) => {
      return prisma.altairInstrument.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
