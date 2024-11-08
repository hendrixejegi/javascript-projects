class Task {
  "task-list";
  #localStorageKey;

  constructor(key) {
    this.#localStorageKey = key;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this["task-list"] =
      JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
  }

  renderTaskList() {
    let taskListHTML = "";

    this["task-list"].forEach((item) => {
      taskListHTML += `
        <!-- todo -->
        <div class="todo">
          <input 
            type="checkbox" 
            name="${item.id}" 
            data-task-id="${item.id}"
            ${item.done ? "checked" : ""}
          />
          <p>
            ${item.task}
          </p>
          ${this.checkDate(item)}
        </div>
      `;
    });

    return taskListHTML;
  }

  checkDate(item) {
    return item["due-date"] ? `<p class="date">${item["due-date"]}</p>` : "";
  }

  addTask(taskInputElem, dateInputElem) {
    if (!taskInputElem.value) {
      return;
    } else {
      this["task-list"].push({
        id: String(Date.now()), // Unique id
        task: taskInputElem.value,
        "due-date": dateInputElem.value,
        done: false,
      });
    }

    taskInputElem.value = "";
    dateInputElem.value = "";
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem(
      this.#localStorageKey,
      JSON.stringify(this["task-list"])
    );
  }

  clearTasks() {
    this["task-list"] = [];
    localStorage.removeItem(this.#localStorageKey);
  }

  getTaskIndex(id) {
    return this["task-list"].findIndex((task) => task.id === id);
  }

  changeStatus(id) {
    const taskIndex = this.getTaskIndex(id);
    if (taskIndex >= 0) {
      this["task-list"][taskIndex].done = !this["task-list"][taskIndex].done;
      this.saveToStorage();
    }
  }

  calculateProgress() {
    const completedTasks = this["task-list"].filter(
      (task) => task.done === true
    );
    const totalTask = this["task-list"].length;

    return Math.round((completedTasks.length / totalTask) * 100);
  }
}

export const task = new Task("task-list");
