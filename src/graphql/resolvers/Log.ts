import type { Resolvers } from '../gen/index.js';

export const LogResolver: Resolvers = {
  Query: {
    logs: (_parent, _args, { prisma }) => {
      return prisma.log.findMany({
        orderBy: [
          {
            time: 'desc',
          },
          {
            id: 'desc',
          },
        ],
        take: 20,
      });
    },
  },
  Mutation: {
    addLog: async (_parent, args, { prisma }) => {
      await prisma.log.create({
        data: args,
      });
      return prisma.log.findMany({
        orderBy: [
          {
            time: 'desc',
          },
          {
            id: 'desc',
          },
        ],
        take: 20,
      });
    },
  },
};
