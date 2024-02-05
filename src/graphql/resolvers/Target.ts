import { prisma } from "../../prisma/db.js"

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

    updateTarget: async (_parent, args, _context, _info) => {
      return prisma.target.update({
        where: { pk: args.pk },
        data: args,
      })
    },

    removeAndCreateBaseTargets: async (_parent, args, _context, _info) => {
      await prisma.target.deleteMany({
        where: {},
      })
      let results = []
      for (let i = 0; i < args.targets.length; i++) {
        let r = await prisma.target.create({ data: args.targets[i] })
        results.push(r)
      }
      return results
    },

    removeAndCreateWfsTargets: async (_parent, args, _context, _info) => {
      await prisma.target.deleteMany({
        where: {
          type: args.wfs,
        },
      })
      let results = []
      for (let i = 0; i < args.targets.length; i++) {
        let r = await prisma.target.create({ data: args.targets[i] })
        results.push(r)
      }
      return results
    },
  },
}
