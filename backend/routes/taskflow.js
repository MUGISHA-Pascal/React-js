const taskflow = require("express").Router();

taskflow.post("/add_task", async (req, res) => {
  const { task } = req.body;
  await new Task({ task }).save();
  console.log("task created");
  res.json("task created");
});

taskflow.get("/get_task", async (req, res) => {
  const task = req.body.task;
  const tasks = await Task.find({ task });
  console.log(`found task ${tasks}`);
  res.json(tasks);
});

taskflow.put("/update_task", async (req, res) => {
  const { prev_task, new_task } = req.body;
  const updated_task = await Task.updateOne({
    task: prev_task,
    task: new_task,
  });
  res.json(updated_task);
});

taskflow.delete("/delete_task", async (req, res) => {
  const { task } = req.body;
  const deleted_task = await Task.deleteOne({ task });
  res.json(deleted_task);
});

module.exports = taskflow;
