import { prisma } from "../../prisma/db"

export const MechanismResolver = {
  Query: {
    mechanism: (_parent, args, _context, _info) => {
      return prisma.mechanism.findFirst({ where: args })
    },
  },
  Mutation: {
    updateMechanism: (_parent, args, _context, _info) => {
      return prisma.mechanism.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
