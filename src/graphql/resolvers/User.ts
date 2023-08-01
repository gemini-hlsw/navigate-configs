import { prisma } from "../../db"

function getUsers() {
  return prisma.user.findMany()
}

function getUser(args) {
  return prisma.user.findFirst({ where: { id: args.id } })
}

function addUser(args) {
  return prisma.user.create({ data: args })
}

export const UserResolver = {
  Query: {
    user: (_parent, args, _context, _info) => getUser(args),
    users: () => getUsers()
  },
  Mutation: {
    addUser: (_parent, args, _context, _info) => addUser(args)
  },
  // User: {
  //   birthday: (u) => u.birthday.toISOString()
  // }
}