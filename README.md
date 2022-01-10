# RSS Feed from Guardian API

Get a recent RSS feeds from Guardian news with the endpoint belonging to its specified sections. The section list can be obtained from index.

The section name i.e. endpoint must be lowercase letters only and could contain hyphen.

This app uses Node.js/Express. Caching functionality is implemented with Redis with expiration of 10 mins. Logging system is configured with different levels like info, warn, error, debug, etc. using winston library. Additionally, it contains dockerfile for the dockerization of an application.

Usage
Create a .env file in the root folder.
Add PORT, API_KEY and BASE_URL of guardian api to the .env file.

# Install dependencies

npm install

# Run in development

npm run dev

# Run in production

npm start

**Dockerizing the application**

Add the ENV variables in the DOCKERFILE/docker-compose.yml.
Open the docker-desktop to start the docker engine in your pc.

Either:
RUN `docker build -t <DOCKER-IMAGE-NAME> .`
After the image is built successfully, run
`docker run <DOCKER-IMAGE-NAME>`
To run locally, run
`docker run -p 8080:3000 docker.io/<DOCKER-IMAGE-NAME>`
open http://localhost:8080.

Or:
RUN `docker-compose up`
