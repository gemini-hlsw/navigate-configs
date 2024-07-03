import { prisma } from "../../prisma/db.js"
import { Resolvers } from '../gen/index.js'

export const RotatorResolver: Resolvers = {
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
