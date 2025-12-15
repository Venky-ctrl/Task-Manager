# Task Management Application (React)

## Project Overview
This is a role-based task management application built using React.  
It supports Admin and User roles with different functionalities.

Admins can create and assign tasks, while Users can view and complete their assigned tasks.

The application uses localStorage to simulate backend data persistence.

---

## Features

### Authentication
- Login with role-based access (Admin / User)
- Session maintained using localStorage

### Admin Dashboard
- Create new tasks
- Assign tasks to users
- Reassign tasks using drag and drop
- View all users and tasks

### User Dashboard
- View assigned tasks
- Mark tasks as completed
- View task status

### Drag and Drop
- Admin can reassign tasks by dragging tasks onto users

### Data Persistence
- All data is stored in browser localStorage
- Data remains after refresh or logout

---

## Technologies Used
- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- localStorage API

---

## How to Run the Project

1. Install dependencies:
```bash
npm install

2. Start the application:
npm start

3. Open browser:
http://localhost:3000

Login Credentials

AdminUsername: admin
Password: admin123

User
Username: user
Password: user123

Notes
No backend is used as per assignment instructions

Code is modular and easy to understand

UI is kept clean and simple