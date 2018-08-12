FROM nginx:latest
LABEL maintainer 'Bruno Casotto'

COPY public /usr/share/nginx/html
EXPOSE 80

#command
#create image
#docker build -t some-content-nginx .
#run image
#docker run --name some-nginx -d -p 8080:80 some-content-nginx