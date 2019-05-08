FROM debian

RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

RUN mkdir /var/www/html/joel
WORKDIR /var/www/html/joel

ADD . ./

EXPOSE 80