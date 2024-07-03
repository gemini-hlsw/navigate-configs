import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const InstrumentResolver: Resolvers = {
  Query: {
    instrument: (_parent, args) => {
      return prisma.instrument.findFirst({ where: args });
    },
    instruments: (_parent, args) => {
      return prisma.instrument.findMany({ where: args });
    },
    distinctInstruments: () => {
      return prisma.instrument.findMany({
        distinct: ['name'],
        select: { name: true },
      });
    },
    distinctPorts: (_parent, args) => {
      return prisma.instrument.findMany({
        where: args,
        distinct: ['issPort'],
        select: { issPort: true },
      });
    },
  },
  Mutation: {
    createInstrument: (_parent, args) => {
      return prisma.instrument.create({ data: { extraParams: {}, ...args } });
    },
  },
};
