import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const AltairGuideLoopResolver: Resolvers = {
  Query: {
    altairGuideLoop: (_parent, args) => {
      return prisma.altairGuideLoop.findFirst({ where: args });
    },
  },
  Mutation: {
    updateAltairGuideLoop: (_parent, args) => {
      return prisma.altairGuideLoop.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
