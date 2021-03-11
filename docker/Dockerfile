###########
# BUILDER #
###########

FROM node:14.16.0-alpine AS builder

WORKDIR /opt/web

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

RUN npm run build

#########
# FINAL #
#########
FROM nginx:1.19.7-alpine as deploy

COPY /docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /opt/web/build /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
    nginx -g 'daemon off;'