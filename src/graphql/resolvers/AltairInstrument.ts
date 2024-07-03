import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const AltairInstrumentResolver: Resolvers = {
  Query: {
    altairInstrument: (_parent, args) => {
      return prisma.altairInstrument.findFirst({ where: args });
    },
  },
  Mutation: {
    updateAltairInstrument: (_parent, args) => {
      return prisma.altairInstrument.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
