import { prisma } from "../../prisma/db"

export const RotatorResolver = {
  Query: {
    rotator: (_parent, args, _context, _info) => {
      return prisma.rotator.findFirst({ where: args })
    },
  },
  Mutation: {
    updateRotator: (_parent, args, _context, _info) => {
      return prisma.rotator.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
