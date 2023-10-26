import { prisma } from "../../prisma/db"

export const InstrumentResolver = {
  Query: {
    instrument: (_parent, args, _context, _info) => {
      return prisma.instrument.findFirst({ where: args })
    },
    instruments: (_parent, args, _context, _info) => {
      return prisma.instrument.findMany({ where: args })
    },
  },
  Mutation: {
    createInstrument: (_parent, args, _context, _info) => {
      return prisma.instrument.create({ data: args })
    },
  },
}