FROM node:19-alpine3.15

RUN mkdir /reddit-clone
WORKDIR /reddit-clone
RUN chmod 644 /reddit-clone
COPY . /reddit-clone
RUN npm install 

EXPOSE 3000
CMD ["npm","run","dev"]
