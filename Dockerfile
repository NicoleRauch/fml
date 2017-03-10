FROM node:6.10.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install --color=false
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

