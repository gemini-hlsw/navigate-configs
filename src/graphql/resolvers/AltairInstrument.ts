import { prisma } from "../../prisma/db"

export const AltairInstrumentResolver = {
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
