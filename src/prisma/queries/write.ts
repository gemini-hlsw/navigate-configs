import { prisma } from "../db"

async function createUser() {
  return await prisma.user.create({
    data: {
      name: "Reader",
      configurations: {
        create: {
          configuration: {
            create: {
              name: "Initial Configuration",
              selectedConfiguration: {
                create: {},
              },
            },
          },
        },
      },
    },
    include: {
      configurations: {
        include: {
          configuration: {
            include: {
              selectedConfiguration: true,
            },
          },
        },
      },
    },
  })
}

export async function write() {
  console.log("Creating user reader")
  let res = await createUser()
  console.log(res)
}
