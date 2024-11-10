# **Contacts Management Application**

## Objective
This is a Full Stack Contacts Management Application where users can manage their contacts through CRUD operations, merge duplicate contacts, and perform secure authentication. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB Atlas for data storage.

## Core Components 
### Backend: 
- **Runtime Environment:** Node.js
- **Server-Side Logic:** Express.js
- **Database:** MongoDB Atlas

### Frontend Development
- **User Interface:** React.js



### Backend Features (API Endpoints)

Here is a list of the main API endpoints available in this project:

- **Authentication Endpoints**
  - `POST /api/auth/signup` - Register a new user with the application.
  - `POST /api/auth/login` - Log in a user and receive a JWT token.

- **Contact Management Endpoints**
  - `GET /api/contacts` - Retrieve a list of all contacts (requires JWT token).
  - `POST /api/contacts` - Create a new contact (requires JWT token).
  - `GET /api/contacts/:id` - Retrieve a specific contact by ID (requires JWT token).
  - `PUT /api/contacts/:id` - Update contact details by ID (requires JWT token).
  - `DELETE /api/contacts/:id` - Delete a contact by ID (requires JWT token).
  - 
    **All API testing was performed using the Postman application.**

### Authentication & Authorization
All protected endpoints require a valid JWT token, which must be included in the request headers:

Authorization: Bearer <JWT-Token>




## Frontend Features

The frontend of this application provides an intuitive interface for managing contacts and authenticating users. Here’s a list of the main features:

#### 1. **User Authentication**
   - **Sign Up Page**: Allows new users to register by providing their name, email, and password.
   - **Login Page**: Enables existing users to log in by entering their email and password. 
   - **Token Storage**: On successful login, the JWT token is securely stored in local storage for maintaining session state.
   - **Protected Routes**: Ensures certain pages are accessible only to authenticated users by checking for the presence of a valid JWT token.


#### 2. **Contact Management**
   - **Add New Contact**: 
     - Provides a form where users can enter a contact's details (e.g., name, email, phone number).
     - Sends a request to the backend to create a new contact.
   - **Edit Contact**:
     - Allows users to update contact information.
     - Opens a pre-filled form with the selected contact’s details for easy modification.
   - **Delete Contact**:
     - Enables users to delete a contact.
     - Includes a confirmation prompt to prevent accidental deletions.

#### 3. **User Feedback and Validation**
   - **Form Validations**: Real-time validation to ensure users enter valid data (e.g., valid email format, required fields).
   - **Success and Error Messages**: Shows success notifications for actions like adding or updating contacts and error messages for failed requests or invalid input.

#### 4. **Logout Functionality**
   - Provides a logout button to clear the JWT token from local storage, effectively ending the user session and redirecting them to the login page.

### Technology Stack
- **Frontend**: React.js, CSS, and Bootstrap for styling
- **State Management**: Context API or a state management library (if applicable)
- **API Requests**: Axios for handling HTTP requests to the backend
- **Routing**: React Router for navigation and protecting routes based on authentication
  This front-end setup creates an efficient and user-friendly interface for managing contacts while securely handling authentication.


  
