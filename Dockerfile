FROM node:24-alpine AS base


# stage 1: install dependencies
FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /portfolio

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# stage 2: build the application
FROM base AS builder 
WORKDIR /portfolio

COPY --from=deps /portfolio/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

# stage 3: production image
FROM base AS runner
WORKDIR /portfolio

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /portfolio/public ./public
COPY --from=builder --chown=nextjs:nodejs /portfolio/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /portfolio/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD [ "node", "server.js" ]