import { TrackingType } from "@prisma/client"

type StatusType = "PENDING" | "ACTIVE" | "DONE" | "ERROR"

interface MechanismInput {
  pk?: number
  mcs: StatusType
  mcsPark: StatusType
  mcsUnwrap: StatusType
  scs: StatusType
  crcs: StatusType
  crcsPark: StatusType
  crcsUnwrap: StatusType
  pwfs1: StatusType
  pwfs1Park: StatusType
  pwfs1Unwrap: StatusType
  pwfs2: StatusType
  pwfs2Park: StatusType
  pwfs2Unwrap: StatusType
  oiwfs: StatusType
  oiwfsPark: StatusType
  odgw: StatusType
  odgwPark: StatusType
  aowfs: StatusType
  aowfsPark: StatusType
  dome: StatusType
  domePark: StatusType
  domeMode: string
  shutters: StatusType
  shuttersPark: StatusType
  shutterMode: string
  shutterAperture: number
  wVGate: StatusType
  wVGateClose: StatusType
  wVGateValue: number
  eVGate: StatusType
  eVGateClose: StatusType
  eVGateValue: number
  agScienceFoldPark: StatusType
  agAoFoldPark: StatusType
  agAcPickoffPark: StatusType
  agParkAll: StatusType
}

export const INITIAL_MECHANISM: MechanismInput = {
  mcs: "PENDING",
  mcsPark: "PENDING",
  mcsUnwrap: "PENDING",
  scs: "PENDING",
  crcs: "PENDING",
  crcsPark: "PENDING",
  crcsUnwrap: "PENDING",
  pwfs1: "PENDING",
  pwfs1Park: "PENDING",
  pwfs1Unwrap: "PENDING",
  pwfs2: "PENDING",
  pwfs2Park: "PENDING",
  pwfs2Unwrap: "PENDING",
  oiwfs: "PENDING",
  oiwfsPark: "DONE",
  odgw: "PENDING",
  odgwPark: "ERROR",
  aowfs: "PENDING",
  aowfsPark: "PENDING",
  dome: "PENDING",
  domePark: "PENDING",
  domeMode: "RM",
  shutters: "PENDING",
  shuttersPark: "ACTIVE",
  shutterMode: "RM",
  shutterAperture: 80,
  wVGate: "PENDING",
  wVGateClose: "PENDING",
  wVGateValue: 29,
  eVGate: "PENDING",
  eVGateClose: "PENDING",
  eVGateValue: 50,
  agScienceFoldPark: "PENDING",
  agAoFoldPark: "PENDING",
  agAcPickoffPark: "PENDING",
  agParkAll: "PENDING",
}
