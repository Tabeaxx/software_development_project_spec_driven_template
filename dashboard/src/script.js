const taskForm = document.querySelector('#task-form');
const taskDescription = document.querySelector('#task-description');
const taskList = document.querySelector('#task-list');
const taskFeedback = document.querySelector('#task-feedback');
const taskCount = document.querySelector('#task-count');
const tasks = [];
let nextTaskId = 1;

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const doneButton = document.createElement('button');

    taskItem.className = 'task-item';
    taskText.textContent = task.description;
    doneButton.type = 'button';
    doneButton.className = 'done-button';
    doneButton.textContent = 'Done';
    doneButton.setAttribute('aria-label', `Done: ${task.description}`);
    doneButton.addEventListener('click', () => removeTask(task.id));

    taskItem.append(taskText, doneButton);
    taskList.append(taskItem);
  });

  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
}

function removeTask(taskId) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return;
  }

  tasks.splice(taskIndex, 1);
  renderTasks();
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

  tasks.push({ id: nextTaskId, description });
  nextTaskId += 1;
  renderTasks();
  showFeedback('Task added.', 'success');
  taskForm.reset();
  taskDescription.focus();
});

renderTasks();