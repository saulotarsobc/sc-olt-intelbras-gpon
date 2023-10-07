# build
FROM node:18 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install -g npm@latest
RUN npm install
RUN npm run build
# prodution
FROM node:18-alpine AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
EXPOSE 3000
CMD ["npm", "start"]