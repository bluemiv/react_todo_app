FROM node:14.15.1-alpine3.12

RUN npm install -g serve

RUN mkdir -p /app/todoapp
WORKDIR /app/todoapp

COPY ./build /app/todoapp

ENTRYPOINT [ "serve",  "-s", "todoapp" ]