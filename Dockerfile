FROM node:latest AS build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . /app
RUN npm run package

FROM alpine:latest

WORKDIR /app
ENV NODE_ENV=production

RUN apk update && apk add --no-cache libstdc++ libgcc

# copy prebuilt binary from previous container
COPY --from=build /app /app
CMD ["/app/app"]  