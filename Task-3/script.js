function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        var li = document.createElement('li');

        // Wrap the task text in a span element
        var taskText = document.createElement('span');
        taskText.appendChild(document.createTextNode(taskInput.value));

        // Create a container for the buttons
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        var completeButton = document.createElement('button');
        completeButton.classList.add('completed-btn');
        completeButton.appendChild(document.createTextNode('Completed'));

        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.appendChild(document.createTextNode('Delete'));

        li.appendChild(taskText);
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function handleTaskAction(event) {
    var target = event.target;
    var li = target.closest('li');

    if (target.classList.contains('completed-btn')) {
        // Toggle the 'completed' class for the span element
        var taskText = li.querySelector('span');
        taskText.classList.toggle('completed');
    } else if (target.classList.contains('delete-btn')) {
        var ul = li.parentNode;
        ul.removeChild(li);
    }
}
