import { prisma } from "../../prisma/db.js"
import { Resolvers } from '../gen/index.js'

export const GemsInstrumentResolver: Resolvers = {
  Query: {
    gemsInstrument: (_parent, args, _context, _info) => {
      return prisma.gemsInstrument.findFirst({ where: args })
    },
  },
  Mutation: {
    updateGemsInstrument: (_parent, args, _context, _info) => {
      return prisma.gemsInstrument.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
