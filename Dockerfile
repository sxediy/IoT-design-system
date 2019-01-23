FROM library/node:10.6.0 as builder
ARG NPM_ARTIFACTORY
WORKDIR /usr/src/app/ 
COPY . .
RUN npm install --verbose --registry=${NPM_ARTIFACTORY}
RUN npm run prod

FROM nginx as app
ARG NAME_PROJECT
LABEL service="${NAME_PROJECT}"
RUN echo 'server { \nlisten       80; \nserver_name  _; \nlocation / { \nroot   /www; \nindex  index.html index.htm; \n} \nlocation = /50x.html { \nroot /usr/share/nginx/html; \n} \n}' > /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build/ /www/
