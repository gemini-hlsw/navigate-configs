import { prisma } from "../../prisma/db.js"

export const InstrumentResolver = {
  Query: {
    instrument: (_parent, args, _context, _info) => {
      return prisma.instrument.findFirst({ where: args })
    },
    instruments: (_parent, args, _context, _info) => {
      return prisma.instrument.findMany({ where: args })
    },
    distinctInstruments: (_parent, args, _context, _info) => {
      return prisma.instrument.findMany({
        distinct: ["name"],
        select: { name: true },
      })
    },
    distinctPorts: (_parent, args, _context, _info) => {
      return prisma.instrument.findMany({
        where: args,
        distinct: ["issPort"],
        select: { issPort: true },
      })
    },
  },
  Mutation: {
    createInstrument: (_parent, args, _context, _info) => {
      return prisma.instrument.create({ data: args })
    },
  },
}
