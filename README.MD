# Innovate Inc. User Authentication API

A simple Express API for user registration and login with JWT authentication.

## Features
- User registration with hashed password using bcrypt
- User login with JWT token issuance
- MongoDB for data storage with Mongoose ODM

## Setup

1. Clone repo and install dependencies:
2. Create a `.env` file with:
`MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000`
3. Run the server:


## API Endpoints

- `POST /api/users/register`  
Request body: `{ username, email, password }`  
Registers a new user.

- `POST /api/users/login`  
Request body: `{ email, password }`  
Logs in a user and returns a JWT token.

---

Made for Innovate Inc. core authentication feature.

