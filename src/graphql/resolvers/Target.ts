import type { Target } from '@prisma/client';
import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const TargetResolver: Resolvers = {
  Query: {
    target: (_parent, args) => {
      return prisma.target.findFirst({
        where: args,
        orderBy: { pk: 'desc' },
      });
    },

    targets: (_parent, args) => {
      return prisma.target.findMany({
        where: args,
        orderBy: { pk: 'desc' },
      });
    },
  },

  Mutation: {
    createTarget: async (_parent, args) => {
      if (args.type === 'FIXED') {
        // Some logics depending on the input
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      } else {
        delete Object.assign(args, { coord1: args.ra }).ra;
        delete Object.assign(args, { coord2: args.dec }).dec;
      }
      return prisma.target.create({
        data: args as typeof args & { coord1: number; coord2: number },
      });
    },

    updateTarget: async (_parent, args) => {
      return prisma.target.update({
        where: { pk: args.pk },
        data: args,
      });
    },

    removeAndCreateBaseTargets: async (_parent, args) => {
      await prisma.target.deleteMany({
        where: {},
      });
      return prisma.target.createManyAndReturn({
        data: (args.targets ?? []) as Target[],
      });
    },

    removeAndCreateWfsTargets: async (_parent, args) => {
      await prisma.target.deleteMany({
        where: {
          type: args.wfs,
        },
      });
      return prisma.target.createManyAndReturn({
        data: (args.targets ?? []) as Target[],
      });
    },
  },
};
