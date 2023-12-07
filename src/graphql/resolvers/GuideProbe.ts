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
    createGuideProbe: async (_parent, args, _context, _info) => {
      // Remove older guide probes
      let deleteProbes = await prisma.observation.findFirst({
        where: { pk: args.observationPk },
        include: { guideProbes: true },
      })
      for (let j = 0; j < deleteProbes.guideProbes.length; j++) {
        await prisma.target.deleteMany({
          where: {
            guideProbePk: deleteProbes.guideProbes[j].pk,
          },
        })
        await prisma.guideProbe.delete({
          where: {
            pk: deleteProbes.guideProbes[j].pk,
          },
        })
      }

      // Create new guide probes
      let guideProbe = await prisma.guideProbe.create({
        data: {
          probe: args.probe,
          observationPk: args.observationPk,
        },
        include: {
          targets: true,
        },
      })

      for (let i = 0; i < args.targets.length; i++) {
        let tgtId = args.targets[i].id
        if (!tgtId) tgtId = new Date().toISOString() + `_${i}`
        await prisma.target.upsert({
          where: { id: tgtId },
          update: {
            id: tgtId,
            name: args.targets[i].name,
            coord1: args.targets[i].ra,
            coord2: args.targets[i].dec,
            epoch: args.targets[i].epoch,
            type: args.targets[i].type,
            guideProbePk: guideProbe.pk,
          },
          create: {
            id: tgtId,
            name: args.targets[i].name,
            coord1: args.targets[i].ra,
            coord2: args.targets[i].dec,
            epoch: args.targets[i].epoch,
            type: args.targets[i].type,
            guideProbePk: guideProbe.pk,
          },
        })
      }

      return await prisma.guideProbe.findFirst({
        where: { pk: guideProbe.pk },
        include: {
          targets: true,
        },
      })
    },
  },
}
