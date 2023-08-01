import { prisma } from "../../db"

function getTarget(args) {
  return prisma.target.findFirst({
    orderBy: {
      pk: 'desc',
    },
    take: 1
  })
}

function getAllFixedTargets() {
  return prisma.fixedTarget.findMany()
}

function createTarget(args) {
  return prisma.target.create({ data: args })
}

export const TargetResolver = {
  Query: {
    target: (_parent, args, _context, _info) => getTarget(args),
    allFixedTargets: (_parent, _args, _context, _info) => getAllFixedTargets(),
  },
  Mutation: {
    createTarget: (_parent, args, _context, _info) => createTarget(args)
  },
  // User: {
  //   birthday: (u) => u.birthday.toISOString()
  // }
}