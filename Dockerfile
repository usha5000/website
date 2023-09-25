# Verwende ein offizielles Node.js-Image als Basis
FROM node:18

# Setze den Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest deiner Anwendung in das Arbeitsverzeichnis
COPY . .

# Port, den deine Anwendung innerhalb des Containers freigibt
EXPOSE 3000

# Starte deine Anwendung, wenn der Container gestartet wird
CMD [ "node", "app.js" ]
