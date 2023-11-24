import { prisma } from "../db"

async function createUser() {
  console.log("Creating user reader")
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

import { INITIAL_INSTRUMENTS } from "./init/instruments"

async function createInstruments() {
  console.log("Creating initial instruments")
  return await prisma.instrument.createMany({
    data: INITIAL_INSTRUMENTS,
  })
}

export async function write() {
  // let res = await createUser()
  let res = await createInstruments()
  console.log(res)
}
