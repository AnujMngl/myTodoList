function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="removeTask(this)">X</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleDone(span) {
  const li = span.parentElement;
  li.classList.toggle('done');
}