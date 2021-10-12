#!/bin/bash
sudo apt-get -y install ca-certificates
sudo apt-get -y update
sudo apt-get -y install openjdk-8-jdk
sudo apt-get -y install ca-certificates
sudo wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo echo "deb https://pkg.jenkins.io/debian-stable binary/" >> /etc/apt/sources.list
sudo apt-get -y update
sudo apt-get -y install jenkins
sudo systemctl restart jenkins.service
sudo apt-get -y install python
