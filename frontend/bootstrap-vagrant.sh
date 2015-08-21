#!/bin/bash

# === System update ==== 

sudo apt-get update -y
sudo apt-get install -y git
sudo apt-get install -y build-essential

# === Install NodeJS ===

# In case you have node executables
sudo apt-get purge node
sudo apt-get purge nodejs
sudo apt-get purge nodejs-legacy

cd /tmp/
wget 'https://raw.githubusercontent.com/taaem/nodejs-linux-installer/master/node-install.sh'
sudo bash node-install.sh 
cd -

# === Install frontend dependencies ===

cd /vagrant/
sudo npm install -g bower
sudo npm install -g grunt-cli

rm -rf node_modules
npm cache clean
npm install

bower install

# === Install ruby dependencies ===

sudo apt-get install -y ruby-dev
sudo apt-get purge -y ruby-compass
sudo gem update
sudo gem install compass

