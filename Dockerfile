FROM node:22-alpine AS runner
ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app
RUN apk update \
  && apk add openssl \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/cache/apt/*

# Create software user
RUN addgroup -S software -g 3624 && adduser -S software -u 3624 -G software
RUN chown -R software:software /usr/src/app
USER software

# Copy dependency definitions
COPY --chown=software:software package.json .

# Install dependencies
RUN npm install

# Copy all the remaining code
COPY --chown=software:software . .

# Build
RUN npm run build

# Generate prisma definitions
RUN npx prisma generate

# Start command
CMD ["./start-server.sh"]
