import { prisma } from "../../prisma/db"

export const GuideProbeResolver = {
  Query: {
    guideProbe: (_parent, args, _context, _info) => {
      return prisma.guideProbe.findFirst({
        where: args,
        orderBy: { pk: "desc" },
        include: {
          observation: true,
          targets: true,
        },
      })
    },

    guideProbes: (_parent, args, _context, _info) => {
      return prisma.guideProbe.findMany({
        where: args,
        orderBy: { pk: "desc" },
        include: {
          observation: true,
          targets: true,
        },
      })
    },
  },

  Mutation: {
    createGuideProbe: (_parent, args, _context, _info) => {
      return prisma.guideProbe.create({ data: args })
    },
  },
}
