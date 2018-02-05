FROM node:alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . /app
RUN npm run build
ENTRYPOINT npm start