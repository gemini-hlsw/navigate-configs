import { prisma } from "../../prisma/db"

export const ConfigurationResolver = {
  Query: {
    configuration: (_parent, args, _context, _info) => {
      return prisma.configuration.findFirst({
        where: args,
        include: {
          instrument: true,
          observation: true,
          rotator: true,
          slewFlags: true,
          users: true,
        },
      })
    },
    configurations: (_parent, args, _context, _info) => {
      return prisma.configuration.findMany({
        where: args,
        orderBy: { pk: "desc" },
        take: 10,
        include: {
          instrument: true,
          observation: true,
          rotator: true,
          slewFlags: true,
          users: true,
        },
      })
    },
  },
  Mutation: {
    createConfiguration: (_parent, args, _context, _info) => {
      return prisma.configuration.create({ data: args })
    },

    updateConfiguration: (_parent, args, _context, _info) => {
      return prisma.configuration.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
