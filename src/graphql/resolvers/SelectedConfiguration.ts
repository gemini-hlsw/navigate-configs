import { prisma } from "../../prisma/db"

export const SelectedConfigurationResolver = {
  Query: {
    selectedConfiguration: (_parent, args, _context, _info) => {
      return prisma.selectedConfiguration.findFirst({
        include: {
          configuration: {
            include: {
              instrument: true,
              observation: {
                include: {
                  guideProbes: {
                    include: {
                      targets: true,
                    },
                  },
                  targets: true,
                },
              },
              rotator: true,
            },
          },
        },
      })
    },
  },

  Mutation: {
    updateSelectedConfiguration: (_parent, args, _context, _info) => {
      return prisma.selectedConfiguration.update({
        where: { pk: args.pk },
        data: args,
        include: {
          configuration: true,
        },
      })
    },
  },
}
