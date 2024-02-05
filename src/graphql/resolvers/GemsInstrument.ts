import { prisma } from "../../prisma/db.js"

export const GemsInstrumentResolver = {
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
