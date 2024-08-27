let taskId = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        id: taskId++,
        text: taskValue
    };

    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);

    li.appendChild(document.createTextNode(task.text));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.appendChild(document.createTextNode('Delete'));

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        const taskId = li.getAttribute('data-id');
        removeTask(taskId);
    }
});

function removeTask(taskId) {
    const taskItem = document.querySelector(`li[data-id="${taskId}"]`);
    if (taskItem) {
        taskItem.remove();
    }
}
