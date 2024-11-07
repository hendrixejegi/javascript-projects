class Task {
  #localStorageKey;

  constructor(key) {
    this.#localStorageKey = key;
  }

  "task-list" = [
    {
      task: "clean room",
      "due-date": "10-11-2024",
    },
    {
      task: "implement features in todo app",
      "due-date": "10-11-2024",
    },
    {
      task: "chill and watch a movie",
      dueDate: "",
    },
  ];

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

    document.querySelector(".js-todo-list-container").innerHTML = taskListHTML;
  }

  checkDate(item) {
    return item["due-date"] ? `<p class="date">${item["due-date"]}</p>` : "";
  }

  addTask() {
    const taskInputElem = document.querySelector(".js-task-input");
    const dateInputElem = document.querySelector(".js-date-input");

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
}

export const task = new Task("task-list");
