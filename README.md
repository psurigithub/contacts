This is a Full Stack Contacts Management Application where users can manage their contacts through CRUD operations, merge duplicate contacts, 
and perform secure authentication.The frontend is built with React, and the backend uses Node.js, Express, and MongoDB Atlas for data storage.

API Documentation:-
-POST /api/auth/register - Register a new user

-POST /api/auth/login - Login a user and receive a JWT token Contacts Management

-GET /api/contacts - Get a list of all contacts

-POST /api/contacts - Create a new contact

-PUT /api/contacts/ - Update an existing contact

-DELETE /api/contacts/ - Delete a contact

-POST /api/contacts/merge - Merge duplicate contacts 



Frontend:
-React.js for building dynamic UI with reusable components.

-State Management using React hooks (useState, useEffect).

-Form Validation for real-time data validation.

-Routing with React Router for navigation between pages.

-API Integration using Axios or Fetch for CRUD operations and authentication.

-JWT Authentication stored in local storage to manage user sessions.


Backend Key Points
-Node.js & Express.js for server-side logic and routing.

-MongoDB Atlas for data storage and NoSQL operations.

-CRUD Operations to manage contacts.

-JWT Authentication and bcrypt for secure login and password storage.

-Validation of input data before processing.

-Route Protection with middleware for secure access to sensitive data.

-Error Handling for meaningful responses and debugging.

-Environment Variables (.env) for secure configuration.


