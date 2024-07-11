import { Prisma } from '@prisma/client';

export const INITIAL_GUIDE_ALARMS: Prisma.GuideAlarmCreateInput[] = [
  {
    wfs: 'PWFS1',
    limit: 900,
    enabled: true,
  },
  {
    wfs: 'PWFS2',
    limit: 900,
    enabled: true,
  },
  {
    wfs: 'OIWFS',
    limit: 900,
    enabled: true,
  },
];