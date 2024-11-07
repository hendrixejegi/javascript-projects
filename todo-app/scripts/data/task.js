class Task {
  "task-list";
  #localStorageKey;

  constructor(key) {
    this.#localStorageKey = key;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this["task-list"] = JSON.parse(
      localStorage.getItem(this.#localStorageKey)
    ) || [
      {
        task: "clean room",
        ["due-date"]: "10-11-2024",
      },
      {
        task: "implement features in todo app",
        ["due-date"]: "10-11-2024",
      },
      {
        task: "chill and watch a movie",
        ["due-date"]: "",
      },
    ];
  }

  renderTaskList() {
    let taskListHTML = "";

    this["task-list"].forEach((item) => {
      taskListHTML += `
        <!-- todo -->
        <div class="todo">
          <input type="checkbox" name="" id="" />
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
    this["task-list"].push({
      task: taskInputElem.value,
      "due-date": dateInputElem.value,
    });

    taskInputElem.value = "";
    dateInputElem.value = "";
    this.renderTaskList();
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
}

export const task = new Task("task-list");
