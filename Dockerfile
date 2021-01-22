FROM node:lts-alpine3.10

#Define our working directory (where the stuff is)
WORKDIR /Debia

# Set hostname var
ENV HOSTNAME="Docker"

# Copy files over to the container
COPY ./ /Debia

#Install modules 
RUN yarn install

#Install pm2 globally
RUN yarn global add pm2
