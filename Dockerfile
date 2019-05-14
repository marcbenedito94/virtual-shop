FROM debian

RUN apt-get update
RUN apt-get install -y apache2

RUN mkdir /var/www/html/joel
WORKDIR /var/www/html/joel

ADD . ./

EXPOSE 80