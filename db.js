// db.js (Database logic)

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

// Export the Task model
module.exports = Task;

// Toggle task completion
app.patch('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks[id];
    task.completed = !task.completed;
    res.json(task);
  });
  