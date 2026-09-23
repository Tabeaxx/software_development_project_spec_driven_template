const taskForm = document.querySelector('#task-form');
const taskDescription = document.querySelector('#task-description');
const taskList = document.querySelector('#task-list');
const taskFeedback = document.querySelector('#task-feedback');
const taskCount = document.querySelector('#task-count');
const tasks = [];

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.textContent = task.description;
    taskList.append(taskItem);
  });

  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
}

function showFeedback(message, type) {
  taskFeedback.textContent = message;
  taskFeedback.className = `feedback feedback--${type}`;
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = taskDescription.value.trim();

  if (!description) {
    showFeedback('Enter a task description before adding it.', 'error');
    taskDescription.focus();
    return;
  }

  tasks.push({ description });
  renderTasks();
  showFeedback('Task added.', 'success');
  taskForm.reset();
  taskDescription.focus();
});

renderTasks();