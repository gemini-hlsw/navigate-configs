import { prisma } from "../db"

async function getUser() {
  return await prisma.user.findFirst({
    include: {
      configurations: {
        include: {
          configuration: {
            include: {
              instrument: true,
            },
          },
        },
      },
    },
  })
}

export async function read() {
  let res = await getUser()
  console.log(res.configurations[0].configuration.instrument)
}
