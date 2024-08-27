// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Get the task text and clear the input field
    const taskText = taskInput.value.trim();
    taskInput.value = '';

    // Check if the task input is not empty
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.innerText = taskText;

        // Create a delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the delete button to the list item
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);
    } else {
        alert('Please enter a task.');
    }
}
