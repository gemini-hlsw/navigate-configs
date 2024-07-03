import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const GuideLoopResolver: Resolvers = {
  Query: {
    guideLoop: (_parent, args) => {
      return prisma.guideLoop.findFirst({ where: args });
    },
  },
  Mutation: {
    updateGuideLoop: (_parent, args) => {
      return prisma.guideLoop.update({
        where: { pk: args.pk },
        data: args,
      });
    },
  },
};
