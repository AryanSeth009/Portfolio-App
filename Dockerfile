# Build stage
FROM node:20 AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install font dependencies and sharp
RUN apt-get update && apt-get install -y \
    fontconfig \
    && rm -rf /var/lib/apt/lists/* && \
    yarn add sharp

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create fonts directory and copy fonts from builder
RUN mkdir -p /app/public/fonts && \
    cp -r /app/public/fonts/* /app/public/fonts/ 2>/dev/null || true

EXPOSE 3000

# Default values for required environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"] 