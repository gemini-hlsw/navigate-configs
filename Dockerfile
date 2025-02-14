# Base image with Node.js and pnpm and a custom user
FROM node:22.14.0-alpine AS base

# Create app directory
WORKDIR /usr/src/app
RUN apk add --no-cache openssl

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install --global corepack@latest && corepack enable

# Create volume for DB initialization
RUN mkdir /usr/src/app/dbinit

# Create software user
RUN addgroup -S software -g 3624 && adduser -S software -u 3624 -G software
RUN chown -R software:software /usr/src/app
USER software

# Add pnpm
COPY --chown=software:software ./package.json ./package.json
ENV COREPACK_DEFAULT_TO_LATEST=0
RUN corepack install

COPY --chown=software:software . .

# Separate layer for dependencies, caching the npm cache
FROM base AS prod-deps
ENV NODE_ENV=production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Separate layer for building, caching the npm cache
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build

# Final image
FROM base
ENV NODE_ENV=production
ENV COREPACK_ENABLE_NETWORK=0

# Copy built files
COPY --from=prod-deps --chown=software:software /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build --chown=software:software /usr/src/app/dist /usr/src/app/dist

EXPOSE 4000

# Start command
CMD ["./start-server.sh"]
