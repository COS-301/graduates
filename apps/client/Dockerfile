# Base Image
From node as builder

# Set working directory
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Install dependencies using package.json
RUN yarn install

# Copy yarn.lock to the working directory
COPY yarn.lock ./

# Copy project files to the working directory
COPY . .

# Start the client application
CMD ["yarn", "start:client"]

From nginx

RUN rm -rf /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app /usr/share/nginx/html/
# Set environment variable PORT which is the PORT the container will run on
ENV PORT=80

# Expose the PORT
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
