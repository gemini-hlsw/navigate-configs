import { prisma } from "../../prisma/db.js"
import { Resolvers } from '../gen/index.js'

export const GemsGuideLoopResolver: Resolvers = {
  Query: {
    gemsGuideLoop: (_parent, args, _context, _info) => {
      return prisma.gemsGuideLoop.findFirst({ where: args })
    },
  },
  Mutation: {
    updateGemsGuideLoop: (_parent, args, _context, _info) => {
      return prisma.gemsGuideLoop.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
