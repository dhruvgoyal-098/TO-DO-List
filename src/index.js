import "./styles.css";
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const date = document.getElementById("date");
const select = document.getElementById("select");
function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".item").forEach((item) => {
        const text = item.querySelector(".text").textContent;
        const dat = item.querySelector(".task-date").textContent;
        const opt = item.querySelector(".task-option").textContent; 
        const completed = item.querySelector("input").checked;
        tasks.push({ text, completed, dat, opt });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => createTaskItem(task.text, task.dat, task.opt, task.completed));
}
function createTaskItem(taskText, d, o, completed = false) {
    const li = document.createElement("li");
    li.classList.add("item");
    if (completed) {
        li.classList.add("checked");
    }
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("checked", checkbox.checked);
        saveTasks();
    });
    checkboxDiv.appendChild(checkbox);
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.textContent = taskText;
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("task-date");
    dateDiv.textContent = d ? `${d}` : "No date";
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("task-option");
    optionDiv.textContent = `${o}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete';
    deleteBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this task?")) {
            taskList.removeChild(li);
            saveTasks();
        }
    });
    li.appendChild(checkboxDiv);
    li.appendChild(textDiv);
    li.appendChild(dateDiv);
    li.appendChild(optionDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    return li;
}
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const d = date.value;
    const o = select.value;
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    createTaskItem(taskText, d, o);
    taskInput.value = "";
    taskInput.focus();
    saveTasks();
});
window.addEventListener("load", loadTasks);