import { prisma } from "../../db"

function getInstrument(args: any) {
  return prisma.instrument.findFirst({ where: args })
}

function getCurrentInstrument() {
  return prisma.currentInstrument.findFirst()
}

function createInstrument(args: any) {
  return prisma.instrument.create({ data: args })
}

function updateCurrentInstrument(args: any) {
  return prisma.currentInstrument.update({ data: args, where: { id: 1 }})
}

export const InstrumentResolver = {
  Query: {
    instrument: (_parent, args, _context, _info) => getInstrument(args),
    currentInstrument: (_parent, _args, _context, _info) => getCurrentInstrument(),
  },
  Mutation: {
    createInstrument: (_parent, args, _context, _info) => createInstrument(args),
    updateCurrentInstrument: (_parent, args, _context, _info) => updateCurrentInstrument(args),
  },
}