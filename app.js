// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add a click event to mark the task as done
  taskItem.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Append the task to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});