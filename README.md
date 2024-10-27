# Book Management System

## Overview

A RESTful API for a Book Management System with user authentication, profile management, and book management.

## Project Structure

```md
/book-management-system
│
├── /views                   # EJS templates
│   └── welcomeEmail.ejs     # Welcome email template
├── /routes                  # Express routes
│   ├── auth.js              # Authentication routes (register, login)
│   ├── profile.js           # Profile management routes
│   └── books.js             # Book management routes
├── /controllers             # Route handlers
│   ├── authController.js    # Handles user registration, login, etc.
│   ├── profileController.js # Handles profile RUD operations
│   └── bookController.js    # Handles book CRUD operations
├── /models                  # Database models and schema
│   ├── userModel.js         # User model
│   └── bookModel.js         # Book model
├── /middlewares             # Protect admin routes
│   ├── authMiddleware.js    # Authenticate add, delete and update endpoints     
├── /config                  # Configuration files
│   └── db.js                # Database connection setup
├── .env                     # Stores environment variables
├── package-lock.json        # Project metadata
├── package.json             # Project metadata and dependencies
├── server.js                # server entry point
├── README.md                # Setup guide and documentation
└── app.js                   # Main application setup
```

## Getting Started

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)
- [Git](https://git-scm.com/)

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page, this will create a copy of this repository in your account.

### Clone this repository

`git clone https://github.com/your-github-username/Book-Management-System.git`

`cd Book-Management-System`

```bash
Set up environment variables by creating a `.env` file

PORT=3000
JWT_SECRET=your_jwt_secret
DB_URI=your_database_uri
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_gmail_username
EMAIL_PASS=your_app_password
```

## Install Dependencies

`npm install node.js express bcryptjs jsonwentoken mongoose body-parser ejs dotenv nodemailer nodemon`

## Start The Application

`npm start`

### Postman Documentation

[Link to Postman Collection](https://documenter.getpostman.com/view/38698911/2sAY4sjja8)

### Database Setup and Entity Relationship Diagram

Use MongoDB locally or via MongoDB Atlas. Update the `DB_URI` in `.env` accordingly.

[Link to ERD](https://dbdiagram.io/d/Book-Management-System-671e3a4c97a66db9a368e107)

![ERD image](https://github.com/omotomiwa26/Book-Management-System/blob/main/Book Management System.png?raw=true)
