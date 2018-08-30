FROM node:10.8.0-slim
LABEL maintainer="lonkar.yogeshr@gmail.com"

ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

RUN mkdir -p /usr/local/nodeapp
ADD package.json /usr/local/nodeapp
RUN npm install
ADD . /usr/local/nodeapp
WORKDIR /usr/local/nodeapp
RUN npm update

CMD [ "npm", "start" ]