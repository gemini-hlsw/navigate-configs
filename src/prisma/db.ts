import { PrismaClient } from '@prisma/client';

import { extendPrisma } from './extend.js';

export const prisma = extendPrisma(new PrismaClient());

export type Prisma = typeof prisma;
