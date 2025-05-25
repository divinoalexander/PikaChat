# PikaChat - Real-time Chat Application

![Chat Interface](https://github.com/divinoalexander/PikaChat/assets/98259356/131c4cf3-71a0-4bfc-a9e4-1a7119133128)
![Login Screen](https://github.com/divinoalexander/PikaChat/assets/98259356/3c613553-3047-40c0-86bb-aca2d2acab0b)
![Avatar Selection](https://github.com/divinoalexander/PikaChat/assets/98259356/1d4f06d8-f63b-4fc0-a768-f7a79f9b5139)

## Overview
PikaChat is a real-time chat application built using the MERN (MongoDB, Express.js, React, and Node.js) stack. It provides users with a seamless messaging experience, complete with user authentication, avatar customization, and real-time online/offline status tracking.

## Technical Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time Communication**: Socket.IO
- **Security**: bcrypt for password hashing
- **Frontend**: React
- **Additional Dependencies**:
  - cors: For handling Cross-Origin Resource Sharing
  - dotenv: For managing environment variables
  - nodemon: For development server auto-restart

## Features
- **User Authentication**
  - Secure registration and login
  - Password hashing using bcrypt
  - Session management
- **Real-time Messaging**
  - Instant message delivery using Socket.IO
  - Message history persistence
  - Typing indicators (coming soon)
- **User Profiles**
  - Custom avatar support
  - Online/offline status
  - User presence tracking
- **Message Management**
  - Persistent message history
  - Chronological message ordering
  - Read/unread status (coming soon)

## API Endpoints

### Authentication Routes
```
POST /api/auth/register
- Register new user
- Body: { username, email, password }

POST /api/auth/login
- User login
- Body: { username, password }

GET /api/auth/allusers/:id
- Get all users except current user
- Params: id (current user ID)

POST /api/auth/setavatar/:id
- Set user avatar
- Params: id (user ID)
- Body: { image }

GET /api/auth/logout/:id
- User logout
- Params: id (user ID)
```

### Message Routes
```
POST /api/messages/addmsg
- Send a message
- Body: { from, to, message }

POST /api/messages/getmsg
- Get messages between two users
- Body: { from, to }
```

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Make sure both are installed and MongoDB is running.

### Installation Methods

#### Method 1: Standard Installation

1. Clone the repository
```bash
git clone https://github.com/divinoalexander/PikaChat.git
cd PikaChat
```

2. Set up environment variables
```bash
# Frontend environment variables (root directory)
cp .env.example .env

# Server environment variables
cd server
cp .env.example .env
cd ..
```

3. Install dependencies

Using npm:
```bash
# Install frontend dependencies (in the root directory)
npm install

# Install server dependencies
cd server
npm install
cd ..
```

Or using yarn:
```bash
# Install frontend dependencies (in the root directory)
yarn install

# Install server dependencies
cd server
yarn install
cd ..
```

4. Start the application

Using npm:
```bash
# Start server (in one terminal)
cd server
npm start
# or for development with auto-restart
npm run dev

# Start frontend (in another terminal, from the root directory)
npm start
```

Or using yarn:
```bash
# Start server (in one terminal)
cd server
yarn start
# or for development with auto-restart
yarn dev

# Start frontend (in another terminal, from the root directory)
yarn start
```

#### Method 2: Docker Installation
Requires Docker and docker-compose to be installed.

1. Build the containers
```bash
docker compose build --no-cache
```

2. Start the application
```bash
docker compose up
```

The application will be available at `localhost:3000`

## Database Schema

### User Model
```javascript
{
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false
  },
  avatarImage: {
    type: String,
    default: ""
  }
}
```

### Message Model
```javascript
{
  message: {
    text: {
      type: String,
      required: true
    }
  },
  users: Array,
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  timestamps: true
}
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments
- Socket.IO for real-time communication
- MongoDB Atlas for database hosting
- React for the frontend framework
