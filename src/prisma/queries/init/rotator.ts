import { TrackingType } from "@prisma/client"

interface RotatorInput {
  pk?: number
  angle: number
  tracking: TrackingType
}

export const INITIAL_ROTATOR: RotatorInput = {
  angle: 0.0,
  tracking: "TRACKING",
}
