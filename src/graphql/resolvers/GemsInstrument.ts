import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const GemsInstrumentResolver: Resolvers = {
  Query: {
    gemsInstrument: (_parent, args) => {
      return prisma.gemsInstrument.findFirst({ where: args });
    },
  },
  Mutation: {
    updateGemsInstrument: (_parent, args) => {
      return prisma.gemsInstrument.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
