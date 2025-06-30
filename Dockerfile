FROM php:8.2-cli

WORKDIR /var/www/html

COPY . /var/www/html

EXPOSE 8080

CMD ["sh", "-c", "php -S 0.0.0.0:$PORT -t /var/www/html"]
