#!/bin/sh

#cd to project directory
cd debia

#pull code from github 
git pull

#update node modules
yarn

#compile application
yarn compile

#reload pm2 processes
pm2 restart all