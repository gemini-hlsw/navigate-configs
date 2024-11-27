import type { Prisma } from '@prisma/client';

export const INITIAL_CONFIGURATION: Prisma.ConfigurationCreateInput = {
  site: 'GN',
  oiGuidingType: 'NORMAL',
  p1GuidingType: 'NORMAL',
  p2GuidingType: 'NORMAL',
};
