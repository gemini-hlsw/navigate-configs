import { prisma } from "../../prisma/db"

export const UserResolver = {
  Query: {
    user: (_parent, args, _context, _info) => {
      return prisma.user.findFirst({
        where: { pk: args.pk },
        include: {
          configurations: {
            include: {
              configuration: {
                include: {
                  instrument: true,
                },
              },
            },
          },
        },
      })
    },

    users: (_parent, args, _context, _info) => {
      return prisma.user.findMany({
        where: args,
        orderBy: { pk: "desc" },
        take: 10,
        include: {
          configurations: {
            include: {
              configuration: {
                include: {
                  instrument: true,
                },
              },
            },
          },
        },
      })
    },
  },

  Mutation: {
    createUser: (_parent, args, _context, _info) => {
      return prisma.user.create({ data: args })
    },
  },
}
