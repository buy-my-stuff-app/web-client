FROM node:12.16-alpine3.11 as builder
WORKDIR /home/bmsa/web-client
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build


FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/bmsa/web-client/build /usr/share/nginx/html
