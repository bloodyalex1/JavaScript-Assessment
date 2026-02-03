Name:Alex Ferney Largo Montoya
email:Alexlargomontoya@gmail.com
clan:McCarthy

Project 1: JSON Server + CRUD + Roles
📌 Project Overview
Develop a website that allows the management of academic tasks, along with an administrator who can view all tasks, users, and their status (pending, completed, deleted).

The application is developed using HTML, CSS, JavaScript, focusing on frontend logic, asynchronous programming..

🎯 Objectives
Use JSON Server as a mock REST API
Implement full CRUD operations
Simulate role management (admin / user)
Practice async/await and Promises
Understand and apply HTTP methods
Implement basic validations
Add search and pagination functionality
⚙️ Features
List users from the API
Create new tasks
edit tasks
Delete tasks
Search tasks by name to tasks
Paginate user results
Informational section explaining HTTP methods used
🧠 How It Works
JSON Server exposes REST endpoints at:

http://localhost:3000
The frontend is served from the public folder

The app consumes the /users endpoint using fetch

All requests are handled using async/await

The active role is selected from a dropdown and controls permissions

Search is implemented using:

?q=searchText
Pagination is implemented using:

\_page=number&\_limit=number
🌐 HTTP Methods Used
Method Description
GET Retrieve users/tasks from the API
POST Create a new (users to register),(tasks)
PUT Update a full tasks and user object
PATCH Update partial profile data
DELETE Remove a tasks
✅ Validations
Name is required
Email is required and must be valid
password
role if is admin go to page to admin(admin-dashboard.html)
or is a user go to userpage of name (dashboard.html)
Email must be unique (no duplicates allowed)
🗂 Project Structure
CRUDTASK/
│── db.json
│── package.json
│── public/
│ ├── index.html
│ └── register.html
│ └── profile.html
│ └── dashboard.html
│ └── admin-dashboard.html
│──styles
    ├──styles.css
    └──profile.css
    └──dashboard.css
    └──admin-dashboard.css
│──JS
    ├──main.js
    └──register.js
    └──redirections.js
    └──profile.js
    └──dashboard.js
    └──admin-dashboard.js
│──IMG
File Description
db.json → Stores user data
public/index.html → UI built with boostrap
public/File js → CRUD logic, async/await, fetch, roles, search, pagination
🧪 Requirements
Node.js 18+ (recommended)
npm
🚀 How to Run the Project
Install dependencies:

npm install json-server
Start JSON Server:

npm run start
Open the browser at:

http://localhost:3000
📝 Notes
Authentication is not real; roles are simulated on the frontend
You can manually edit db.json to add initial users,tasks and change role of user to admin anyone
For pagination testing, add multiple users to db.json
📚 Purpose
This project was developed as part of an exam delivery, focused on demonstrating frontend skills, REST API consumption, understanding of asynchronous JavaScript,Methods to GET,POST,PUT,PATCH,DELETE,how to use dom,global variables,function arrow,addevents,getelements, and operations logic
