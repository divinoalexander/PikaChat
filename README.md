# PikaChat
 A MERN stack chat application leverages MongoDB, Express.js, React, and Node.js to create a real-time messaging platform. Users can register, log in, and exchange messages seamlessly. Socket.IO facilitates instant communication, providing a dynamic and interactive user experience.
![image](https://github.com/divinoalexander/PikaChat/assets/98259356/131c4cf3-71a0-4bfc-a9e4-1a7119133128)
![image](https://github.com/divinoalexander/PikaChat/assets/98259356/3c613553-3047-40c0-86bb-aca2d2acab0b)
![image](https://github.com/divinoalexander/PikaChat/assets/98259356/1d4f06d8-f63b-4fc0-a768-f7a79f9b5139)


## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.
### Installation

#### First Method
```shell
git clone https://github.com/divinoalexander/PikaChat.git
cd PikaChat
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```
Done! Now open localhost:3000 in your browser.

#### Second Method
- This method requires docker and docker-compose to be installed in your system.
- Make sure you are in the root of your project and run the following command.

```shell
docker compose build --no-cache
```
after the build is complete run the containers using the following command
```shell
docker compose up
```
now open localhost:3000 in your browser.
