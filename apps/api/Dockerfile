# Base Image
FROM node

# Set working directory
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Copy yarn.lock to the working directory
COPY yarn.lock ./

# Install dependencies using package.json
RUN yarn install

# Copy project files to the working directory
COPY . .

# Set environment variable PORT which is the PORT the container will run on
ENV PORT=3333

# Expose the PORT
EXPOSE 3333

# Start the client application
CMD ["yarn", "start:api"]
