# build
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install -g npm@latest
RUN npm install
RUN npm run build

# prodution
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]