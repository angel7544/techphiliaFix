FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (this is just documentation)
EXPOSE 5173:5173


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]