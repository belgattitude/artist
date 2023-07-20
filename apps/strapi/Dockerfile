ARG NODE_VERSION=18.16
ARG ALPINE_VERSION=3.18

#############################################################
# Stage 1 - Deps installation                               #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as deps
RUN apk add --no-cache bash && corepack enable

WORKDIR /app

COPY --link ./package.json ./yarn.lock ./.yarnrc.yml ./

# Optimizations for yarn install
ENV YARN_ENABLE_GLOBAL_CACHE false
ENV YARN_CACHE_FOLDER /var/cache/yarn-artist-strapi
ENV YARN_ENABLE_MIRROR false
ENV YARN_COMPRESSION_LEVEL 0
ENV YARN_CHECKSUM_BEHAVIOR ignore

RUN yarn install --immutable --inline-builds

#############################################################
# Stage 2 - Build from installation in deps stage           #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as builder
RUN corepack enable

ARG DATABASE_FILENAME
ENV DATABASE_FILENAME ${DATABASE_FILENAME}

WORKDIR /app

COPY --link . .
COPY --from=deps --link /app/node_modules ./node_modules

RUN NODE_ENV=production yarn build


#############################################################
# Stage 3 - Run final / make runnable image ready           #
#############################################################

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} as runner
RUN apk add --no-cache tzdata bash && corepack enable

ENV TZ=Europe/Brussels

WORKDIR /app

COPY --link ./package.json ./yarn.lock ./.yarnrc.yml ./favicon.png ./
COPY --from=builder --link /app/node_modules ./node_modules
#COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/config ./config
# DANGER: if ./src is is not copied, strapi will remove the database
# when starting up: migration with no schema defined -> empty db
COPY --from=builder --chown=node:node /app/src ./src
COPY --from=builder --chown=node:node /app/database ./database

EXPOSE 1337

CMD ["./node_modules/.bin/strapi", "develop"]


