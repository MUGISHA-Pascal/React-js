const mongoose = require("mongoose");
const express = require("express");
const Task = require("./model/Task");
const keys = require("./keys");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());
mongoose.connect(keys.mongodb_url);

app.post("/add_task", async (req, res) => {
  const { task } = req.body;
  await new Task({ task }).save();
  console.log("task created");
  res.json("task created");
});

app.get("/get_task", async (req, res) => {
  const task = req.body.task;
  const tasks = await Task.find({ task });
  console.log(`found task ${tasks}`);
  res.json(tasks);
});

app.put("/update_task", async (req, res) => {
  const { prev_task, new_task } = req.body;
  const updated_task = await Task.updateOne({
    task: prev_task,
    task: new_task,
  });
  res.json(updated_task);
});

app.delete("/delete_task", async (req, res) => {
  const { task } = req.body;
  const deleted_task = await Task.deleteOne({ task });
  res.json(deleted_task);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
