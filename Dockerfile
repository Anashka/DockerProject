FROM node:latest as node

COPY . .
RUN npm install
RUN npm run build --prod


#.........
# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/booksweb-client /usr/share/nginx/html