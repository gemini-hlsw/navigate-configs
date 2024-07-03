import { Prisma } from '@prisma/client';

export const INITIAL_MECHANISM: Prisma.MechanismCreateInput = {
  mcs: 'PENDING',
  mcsPark: 'PENDING',
  mcsUnwrap: 'PENDING',
  scs: 'PENDING',
  crcs: 'PENDING',
  crcsPark: 'PENDING',
  crcsUnwrap: 'PENDING',
  pwfs1: 'PENDING',
  pwfs1Park: 'PENDING',
  pwfs1Unwrap: 'PENDING',
  pwfs2: 'PENDING',
  pwfs2Park: 'PENDING',
  pwfs2Unwrap: 'PENDING',
  oiwfs: 'PENDING',
  oiwfsPark: 'DONE',
  odgw: 'PENDING',
  odgwPark: 'ERROR',
  aowfs: 'PENDING',
  aowfsPark: 'PENDING',
  dome: 'PENDING',
  domePark: 'PENDING',
  domeMode: 'RM',
  shutters: 'PENDING',
  shuttersPark: 'ACTIVE',
  shutterMode: 'RM',
  shutterAperture: 80,
  wVGate: 'PENDING',
  wVGateClose: 'PENDING',
  wVGateValue: 29,
  eVGate: 'PENDING',
  eVGateClose: 'PENDING',
  eVGateValue: 50,
  agScienceFoldPark: 'PENDING',
  agAoFoldPark: 'PENDING',
  agAcPickoffPark: 'PENDING',
  agParkAll: 'PENDING',
};