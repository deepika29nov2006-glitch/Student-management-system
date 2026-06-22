Student Management System REST API

📌 Project Overview

A simple REST API built using Node.js and Express.js to manage student records. This API supports all basic CRUD (Create, Read, Update, Delete) operations.

---

🚀 Features

- Create a new student
- Get all students
- Update student details
- Delete a student

---

🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API

---

📂 Project Structure

StudentManagementSystem/
│
├── node_modules/
├── package.json
├── package-lock.json
└── app.js

---

⚙️ Installation

1. Clone the repository

git clone <repository-url>

2. Navigate to the project folder

cd StudentManagementSystem

3. Install dependencies

npm install

4. Run the application

node app.js

Server will start on:

http://localhost:3000

---

📮 API Endpoints

1. Create Student

POST "/students"

Request Body:

{
  "name": "Rahul",
  "age": 21,
  "course": "BCA"
}

Response:

{
  "id": 1,
  "name": "Rahul",
  "age": 21,
  "course": "BCA"
}

---

2. Get All Students

GET "/students"

Response:

[
  {
    "id": 1,
    "name": "Rahul",
    "age": 21,
    "course": "BCA"
  }
]

---

3. Update Student

PUT "/students/:id"

Request Body:

{
  "name": "Rahul Sharma",
  "age": 22,
  "course": "MCA"
}

---

4. Delete Student

DELETE "/students/:id"

Response:

{
  "message": "Student deleted successfully"
}


---

👩‍💻 Author

Deepika Pal

B.Tech Student | Learning Node.js, Express.js, and Backend Development