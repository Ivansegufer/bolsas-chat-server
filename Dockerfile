#Esta imágen server-chat donde se levantará el servidor del chat.

#El servidor corre con node.js.

#Imágen base
FROM node

#Directorio de trabajo.
WORKDIR /app

#Copiar esta carpeta a la imágen.
COPY . /app

#Scripts a ejecutar.
RUN npm install
CMD ["npm", "run", "dev"]


#Exponer esta imágen en un puerto dentro del contenedor.
EXPOSE 3300