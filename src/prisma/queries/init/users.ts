import type { Prisma } from '@prisma/client';

export const INITIAL_USERS: Prisma.UserCreateInput[] = [
  {
    name: 'Reader',
  },
];
