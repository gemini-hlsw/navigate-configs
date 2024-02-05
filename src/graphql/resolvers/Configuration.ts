import { prisma } from "../../prisma/db.js"

export const ConfigurationResolver = {
  Query: {
    configuration: (_parent, args, _context, _info) => {
      return prisma.configuration.findFirst({ where: args })
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
