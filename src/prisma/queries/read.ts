import { prisma } from "../db"

async function getUser() {
  return await prisma.user.findFirst()
}

export async function read() {
  let res = await getUser()
}
