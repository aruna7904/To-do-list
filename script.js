const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");
const quickAddBtn = document.getElementById("addQuick");
const titleInput = document.getElementById("taskTitle");
const descInput = document.getElementById("taskDesc");
const searchInput = document.getElementById("q");

function createTask(title, desc) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = title + (desc ? ` - ${desc}` : "");
  
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.style.background = "#2196f3";
  doneBtn.onclick = () => {
    span.classList.toggle("task-done");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.style.background = "#f44336";
  delBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);
}

addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  if (title) {
    createTask(title, desc);
    titleInput.value = "";
    descInput.value = "";
  }
});

quickAddBtn.addEventListener("click", () => {
  const title = prompt("Enter task title:");
  if (title) createTask(title, "");
});

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  Array.from(taskList.children).forEach(li => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? "" : "none";
  });
});
