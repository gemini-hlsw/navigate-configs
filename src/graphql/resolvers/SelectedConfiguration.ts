import { prisma } from "../../prisma/db"

export const SelectedConfigurationResolver = {
  Query: {
    selectedConfiguration: (_parent, args, _context, _info) => {
      return prisma.selectedConfiguration.findFirst({
        include: {
          configuration: {
            include: {
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
              instrument: true,
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
