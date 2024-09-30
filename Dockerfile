# Base image
FROM node:lts-iron

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

COPY /node_modules /app/node_modules

# Install dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Expose port 3000 for the React app
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
