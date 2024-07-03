import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const SlewFlagsResolver: Resolvers = {
  Query: {
    slewFlags: (_parent, args) => {
      return prisma.slewFlags.findFirst({ where: args });
    },
  },
  Mutation: {
    updateSlewFlags: (_parent, args) => {
      return prisma.slewFlags.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
