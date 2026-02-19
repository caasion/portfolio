FROM node:24

WORKDIR /deps
COPY package*.json ./
RUN npm i

ENV NODE_PATH=/deps/node_modules
ENV PATH="/deps/node_modules/.bin:$PATH"

WORKDIR /workspace/repo
