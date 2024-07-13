import { startStandaloneServer } from '@apollo/server/standalone';
import { populateDb } from './prisma/queries/main.js';

import { ApolloContext, server } from './server.js';
import { prisma } from './prisma/db.js';

if (process.argv.includes('populate')) {
  // Populate DB
  await populateDb();
} else {
  const { url } = await startStandaloneServer<ApolloContext>(server, {
    listen: { port: parseInt(process.env.SERVER_PORT!) || 4000 },
    context: () =>
      Promise.resolve({
        prisma,
      }),
  });
  console.log(`🚀  Server ready at: ${url}`);
}
