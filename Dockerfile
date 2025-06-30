# Použij oficiální PHP image
FROM php:8.2-cli

# Nastav pracovní adresář
WORKDIR /usr/src/app

# Zkopíruj všechny soubory do kontejneru
COPY . .

# Spusť vestavěný PHP server
CMD ["sh", "-c", "php -S 0.0.0.0:$PORT -t /var/www/html"]
