FROM node:lts-alpine
# Establece el directorio de trabajo en /app
WORKDIR /app
 
# Copia el package.json y el package-lock.json
COPY package*.json ./
 
# Instala las dependencias
RUN npm install
 
# Copia el resto de los archivos de la aplicación
COPY . .
 
# Construye la aplicación para producción
RUN npm run build
 
# Instala un servidor estático simple
RUN npm install -g serve
 
# Expone el puerto 3000
EXPOSE 3000
 
# Comando para servir la aplicación
CMD ["serve", "-s", "dist"]