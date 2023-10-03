const express = require('express');
const router = express.Router();
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controller/ToDoController");


router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
