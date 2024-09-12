# Use an official Node.js runtime as a parent image for a TypeScript project.
FROM node:14

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory.
COPY package.json package-lock.json ./

# Install the project dependencies.
RUN npm install

# Copy the remaining application code to the working directory.
COPY . .

# Ensure that TypeScript is globally installed.
RUN npm install -g typescript

# Expose the port the app runs on.
EXPOSE 3000

# Command to build the project.
RUN npm run build

# Command to run the application.
CMD [ "npm", "start" ]