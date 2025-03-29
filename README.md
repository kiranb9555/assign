# EmployWise Assignment

A React application that integrates with the Reqres API to perform basic user management functions.

## Features

- User Authentication
- Paginated User List
- User Management (Edit/Delete)
- Responsive Design
- Error Handling
- Form Validation

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## API Endpoints Used

- Authentication: POST /api/login
- Get Users: GET /api/users?page={page}
- Update User: PUT /api/users/{id}
- Delete User: DELETE /api/users/{id}

## Technologies Used

- React
- Material-UI
- React Router
- Axios
- Context API for State Management

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── context/       # Context providers
  ├── services/      # API services
  ├── utils/         # Utility functions
  └── App.js         # Main application component
```

## Assumptions

1. The API token is stored in localStorage for persistence
2. Users are redirected to login if token is missing or expired
3. Pagination is implemented with a page size of 6 users per page
4. Form validation is implemented for login and edit forms 