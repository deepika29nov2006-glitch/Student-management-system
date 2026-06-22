const express = require("express");

const app = express();
app.use(express.json());

let students = [];
let currentId = 1;

/* =========================
   CREATE STUDENT
   POST /students
========================= */
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  const student = {
    id: currentId++,
    name,
    age,
    course,
  };

  students.push(student);
  res.status(201).json(student);
});

/* =========================
   READ ALL STUDENTS
   GET /students
========================= */
app.get("/students", (req, res) => {
  res.json(students);
});
/* =========================
   UPDATE STUDENT
   PUT /students/:id
========================= */
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const { name, age, course } = req.body;

  student.name = name;
  student.age = age;
  student.course = course;

  res.json(student);
});

/* =========================
   DELETE STUDENT
   DELETE /students/:id
========================= */
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  students.splice(index, 1);

  res.json({
    message: "Student deleted successfully",
  });
});

/* =========================
   SERVER
========================= */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});