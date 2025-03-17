# Use the official Node.js image as a base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./ 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight image to serve the application
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy only the built application and necessary files from the builder stage
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Set environment variable for production
ENV NODE_ENV=production

# Set the port to 4200
ENV PORT=4200

# Expose the port that Next.js will run on
EXPOSE 4200

# Start the application in production mode
CMD ["npm", "run", "start"]