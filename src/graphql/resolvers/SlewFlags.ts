import { prisma } from "../../prisma/db"

export const SlewFlagsResolver = {
  Query: {
    slewFlags: (_parent, args, _context, _info) => {
      return prisma.slewFlags.findFirst({ where: args })
    },
  },
  Mutation: {
    updateSlewFlags: (_parent, args, _context, _info) => {
      return prisma.slewFlags.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
