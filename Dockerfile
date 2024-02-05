FROM node:slim AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn prisma generate && yarn build


FROM node:slim AS runner
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

RUN apt-get update \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/cache/apt/*


COPY package.json ./
COPY prisma ./prisma
COPY --from=builder /usr/src/app/dist ./dist

RUN yarn install && yarn prisma generate

CMD ["yarn", "preview"]
