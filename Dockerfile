FROM node:13.12.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "build"]

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
