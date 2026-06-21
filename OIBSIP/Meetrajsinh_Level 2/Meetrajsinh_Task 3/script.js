const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
    const taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const taskText = taskInput.value;

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    const taskName = document.createElement("div");
    taskName.textContent = taskText;

    const addedDate = document.createElement("div");
    addedDate.className = "task-date";
    addedDate.textContent =
        "Added: " + new Date().toLocaleString();

    taskInfo.appendChild(taskName);
    taskInfo.appendChild(addedDate);

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    completeBtn.onclick = function () {
        completeTask(li, taskName);
    };

    editBtn.onclick = function () {
        const updatedTask = prompt(
            "Edit Task:",
            taskName.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskName.textContent = updatedTask;
        }
    };

    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);

    pendingTasks.appendChild(li);

    taskInput.value = "";
}

function completeTask(taskElement, taskName) {

    const completedDate = document.createElement("div");
    completedDate.className = "task-date";

    completedDate.textContent =
        "Completed: " + new Date().toLocaleString();

    taskElement.querySelector(".task-info")
               .appendChild(completedDate);

    taskElement.querySelector(".complete-btn")
               .remove();

    completedTasks.appendChild(taskElement);
}