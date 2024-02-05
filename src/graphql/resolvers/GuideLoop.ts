import { prisma } from "../../prisma/db.js"

export const GuideLoopResolver = {
  Query: {
    guideLoop: (_parent, args, _context, _info) => {
      return prisma.guideLoop.findFirst({ where: args })
    },
  },
  Mutation: {
    updateGuideLoop: (_parent, args, _context, _info) => {
      return prisma.guideLoop.update({
        where: { pk: args.pk },
        data: args,
      })
    },
  },
}
