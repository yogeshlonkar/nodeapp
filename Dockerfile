FROM node:10.8.0-slim
LABEL maintainer="lonkar.yogeshr@gmail.com"
# for phantomjs https://github.com/Medium/phantomjs/issues/659
RUN apt-get -qq update && apt-get -qq -y install bzip2

ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

RUN mkdir -p /usr/local/nodeapp
ADD . /usr/local/nodeapp
WORKDIR /usr/local/nodeapp
RUN npm install

CMD [ "npm", "start" ]