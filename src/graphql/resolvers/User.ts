import { prisma } from '../../prisma/db.js';
import { Resolvers } from '../gen/index.js';

export const UserResolver: Resolvers = {
  Query: {
    user: (_parent, args) => {
      return prisma.user.findFirst({
        where: { pk: args.pk },
      });
    },

    users: (_parent, args) => {
      return prisma.user.findMany({
        where: args,
        orderBy: { pk: 'desc' },
        take: 10,
      });
    },
  },

  Mutation: {
    createUser: (_parent, args) => {
      return prisma.user.create({ data: args });
    },
  },
};
