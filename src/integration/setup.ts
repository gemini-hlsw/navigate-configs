import { GraphQLRequest } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { assert, expect } from 'chai';
import { execa } from 'execa';
import { FormattedExecutionResult } from 'graphql';
import { Prisma } from '../prisma/db.js';
import { extendPrisma } from '../prisma/extend.js';
import { ApolloContext, server } from '../server.js';

export interface ServerFixture {
  /**
   * Execute a graphql operation and return the result.
   */
  executeGraphql: <T extends Record<string, unknown>>(options: GraphQLRequest<T>) => Promise<FormattedExecutionResult>;
  container: StartedPostgreSqlContainer;
  prisma: Prisma;
}

/**
 * Initialize a fixture for the tests. This will create a postgres container, migrate and seed the database, and setup the prisma client.
 * Also provides a helper function to execute a single graphql operation.
 *
 * Fixture is created in a before hook and torn down in an after hook.
 */
export function initializeServerFixture() {
  // Mutable fixture object that holds the database connection and other useful objects
  const fixture: ServerFixture = {} as ServerFixture;

  // Register setup to create the fixture
  before(async () => {
    // Create a postgres container for the tests
    const container = await new PostgreSqlContainer().start();
    const databaseUrl = container.getConnectionUri();

    // Setup Prisma client with the test container connection
    const prisma = extendPrisma(new PrismaClient({ datasourceUrl: databaseUrl }));
    // Migrate and seed the database
    const exec = execa({ env: { DATABASE_URL: databaseUrl } });
    await exec`prisma migrate dev`;
    await exec`prisma db seed`;

    const contextValue: ApolloContext = { prisma };

    async function executeGraphql(options: GraphQLRequest) {
      const response = await server.executeOperation(options, { contextValue });

      assert(response.body.kind === 'single');
      expect(response.body.singleResult.errors).to.be.undefined;

      return response.body.singleResult;
    }

    fixture.executeGraphql = executeGraphql;
    fixture.container = container;
    fixture.prisma = prisma;
  });

  // Register teardown
  after(async () => {
    await fixture.prisma.$disconnect();
    await fixture.container.stop();
  });

  return fixture;
}