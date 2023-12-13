import { prisma } from "../db"
import { INITIAL_CONFIGURATION } from "./init/configuration"
import { INITIAL_INSTRUMENTS } from "./init/instruments"
import { INITIAL_ROTATOR } from "./init/rotator"
import { INITIAL_SLEW_FLAGS } from "./init/slewFlags"
import { INITIAL_USERS } from "./init/users"

async function createUsers() {
  console.log("Creating user reader")
  return await prisma.user.createMany({
    data: INITIAL_USERS,
  })
}

async function createInstruments() {
  console.log("Creating initial instruments")
  return await prisma.instrument.createMany({
    data: INITIAL_INSTRUMENTS,
  })
}

async function createRotator() {
  console.log("Creating initial rotator")
  return await prisma.rotator.create({
    data: INITIAL_ROTATOR,
  })
}

async function createSlewFlags() {
  console.log("Creating initial slew flags")
  return await prisma.slewFlags.create({
    data: INITIAL_SLEW_FLAGS,
  })
}

async function createConfiguration() {
  console.log("Creating initial configuration")
  return await prisma.configuration.create({
    data: INITIAL_CONFIGURATION,
  })
}

export async function write() {
  await createUsers()
  await createInstruments()
  await createSlewFlags()
  await createRotator()
  await createConfiguration()
}
