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
│   ├── profileController.js # Handles profile operations
│   └── bookController.js    # Handles book CRUD operations
├── /models                  # Database models
│   ├── userModel.js         # User model
│   └── bookModel.js         # Book model
├── /config                  # Configuration files
│   └── db.js                # Database connection setup
├── .env                     # Stores environment variables
├── package-lock.json        # Project metadata
├── package.json             # Project metadata
├── server.js                # server port
├── README.md                # Setup guide and documentation
└── app.js                   # Main entry point
```

## Install Dependencies

- node.js
- express
- bcryptjs
- jsonwentoken
- mongoose
- body-parser
- ejs
- dotenv
- nodemailer
- nodemon

## Getting Started

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager, included with Node.js)
- [Git](https://git-scm.com/)

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

### Clone this repository

```git
git clone https://github.com/your-username/book-management-system.git 

cd book-management-system

Set up environment variables by creating a `.env` file:
```

### Postman Documentation

[Link to Postman Collection](#)

### Database Setup

Use MongoDB locally or via MongoDB Atlas. Update the `DB_URI` in `.env` accordingly.
