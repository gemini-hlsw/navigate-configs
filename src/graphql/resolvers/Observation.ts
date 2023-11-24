import { prisma } from "../../prisma/db"
export const ObservationResolver = {
  Query: {
    observation: (_parent, args, _context, _info) => {
      return prisma.observation.findFirst({
        where: args,
        orderBy: { pk: "desc" },
        include: {
          guideProbes: {
            include: {
              targets: true,
            },
          },
          targets: true,
        },
      })
    },

    observations: (_parent, args, _context, _info) => {
      return prisma.observation.findMany({
        where: args,
        orderBy: { pk: "desc" },
        take: 10,
        include: {
          guideProbes: {
            include: {
              targets: true,
            },
          },
          targets: true,
        },
      })
    },
  },

  Mutation: {
    createObservation: (_parent, args, _context, _info) => {
      return prisma.observation.create({ data: args })
    },

    updateObservation: async (_parent, args, _context, _info) => {
      let id = args.id
      if (!id) id = new Date().toISOString()

      let observation = await prisma.observation.upsert({
        where: { id: id },
        update: {
          id: id,
          name: args.name,
          selectedTarget: args.selectedTarget,
          selectedProbe: args.selectedProbe,
        },
        create: {
          id: id,
          name: args.name,
          selectedTarget: args.selectedTarget,
          selectedProbe: args.selectedProbe,
        },
        include: {
          guideProbes: true,
          targets: true,
        },
      })

      for (let i = 0; i < args.targets.length; i++) {
        let tgtId = args.targets[i].id
        if (!tgtId) tgtId = new Date().toISOString() + `_${i}`
        let newTarget = await prisma.target.upsert({
          where: { id: tgtId },
          update: {
            id: tgtId,
            name: args.targets[i].name,
            coord1: args.targets[i].ra,
            coord2: args.targets[i].dec,
            epoch: args.targets[i].epoch,
            observationPk: observation.pk,
          },
          create: {
            id: tgtId,
            name: args.targets[i].name,
            coord1: args.targets[i].ra,
            coord2: args.targets[i].dec,
            epoch: args.targets[i].epoch,
            observationPk: observation.pk,
          },
        })

        if (!observation.targets.some((tgt) => tgt.id === newTarget.id)) {
          observation.targets.push(newTarget)
        }
      }

      return observation
    },

    updateObservationSelectedProbe: (_parent, args, _context, _info) => {
      return prisma.observation.update({
        where: { pk: args.pk },
        data: { selectedProbe: args.selectedProbe },
        include: {
          guideProbes: {
            include: {
              targets: true,
            },
          },
          targets: true,
        },
      })
    },

    updateObservationSelectedTarget: (_parent, args, _context, _info) => {
      return prisma.observation.update({
        where: { pk: args.pk },
        data: { selectedTarget: args.selectedTarget },
        include: {
          guideProbes: {
            include: {
              targets: true,
            },
          },
          targets: true,
        },
      })
    },
  },
}
