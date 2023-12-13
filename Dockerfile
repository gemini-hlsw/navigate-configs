FROM node:18

RUN apt-get update \
  && apt-get install -y openssl \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/cache/apt/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn prisma generate \
  && yarn build
CMD ["yarn", "preview"]
