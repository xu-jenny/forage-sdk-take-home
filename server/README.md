# Payment Server

## Setup

### Option a: docker compose

1. Make sure you have docker compose installed
1. From within this directory, run the following command to spin up the server: `docker compose up`
1. This commmand will spin up one container:
  
  1.1. `dev_server_api` is the development server. It will validate your requests, yield errors, and yield random successful request bodies. You can access it through `http://localhost:8080/`

### Option b: docker

1. Make sure you have docker installed
1. Download the docker image: `docker pull stoplight/prisma`
1. Run the docker container: `docker run -v $PWD/oas.yml:/app/oas.yml -p 8080:8080 mock -h 0.0.0.0 -p 8080 -d /app/oas.yml`
1. The server will run on `http://localhost:8080/`
