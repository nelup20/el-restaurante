FROM node:18.11.0-bullseye-slim as dev
COPY . /app
WORKDIR /app
RUN npm i -g ts-node
RUN npm i

CMD ["npm", "start"]
