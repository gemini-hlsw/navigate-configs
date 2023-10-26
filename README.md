# Navigate configs

Backend api to manage configurations database using TypeScript, Graphql and Prisma.

## Launch on local development

Make sure you have installed [NodeJS](https://nodejs.org/en/) in your machine.

## Install and start

To install needed dependencies you can use multiple options, I recommend using PNPM

### Using PNPM

- Install dependencies

  ```bash
  pnpm install
  ```

- Run the web app
  ```bash
  pnpm run start
  ```

### Using yarn

- Install dependencies

  ```bash
  yarn
  ```

- Run the web app
  ```bash
  yarn start
  ```

### Prisma

A postgresql database instance is needed to run this project, the database should be named `configs` and using prisma its schema can be created using the following commands

```bash
pnpm prisma migrate
pnpm prisma generate
```

```bash
yarn prisma migrate
yarn prisma generate
```

#### ERD

![Database Diagram](./prisma-erd.svg)
