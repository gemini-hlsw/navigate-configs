import { Prisma } from "@prisma/client"

export const INITIAL_ROTATOR: Prisma.RotatorCreateInput = {
  angle: 0.0,
  tracking: "TRACKING",
}
