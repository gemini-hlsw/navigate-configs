import { prisma } from "../../prisma/db"

export const TargetResolver = {
  Query: {
    target: (_parent, args, _context, _info) => {
      return prisma.target.findFirst({
        where: args,
        orderBy: { pk: "desc" },
      })
    },

    targets: (_parent, args, _context, _info) => {
      return prisma.target.findMany({
        where: args,
        orderBy: { pk: "desc" },
      })
    },
  },

  Mutation: {
    createTarget: async (_parent, args, _context, _info) => {
      if (args.type === "FIXED") {
        // Some logics depending on the input
        delete Object.assign(args, { coord1: args.ra })["ra"]
        delete Object.assign(args, { coord2: args.dec })["dec"]
      } else {
        delete Object.assign(args, { coord1: args.ra })["ra"]
        delete Object.assign(args, { coord2: args.dec })["dec"]
      }
      return prisma.target.create({
        data: args,
      })
    },
  },
}
