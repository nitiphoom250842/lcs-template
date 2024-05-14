# Use the official Node.js 18.18-alpine image as a base
FROM node:18.18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project directory into the container
COPY . .

# If node_modules already exists, remove it
RUN rm -rf node_modules

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the built files to the container
COPY .next ./.next
COPY .storybook ./.storybook

# Expose the ports Next.js runs on (usually 3000) and Storybook runs on (usually 6006)
EXPOSE 3000 6006

# Start both Next.js and Storybook
CMD ["yarn", "start"]
