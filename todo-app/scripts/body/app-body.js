import { task } from "../data/task.js";

export function renderBody() {
  task.renderTaskList();

  const addBtn = document.querySelector(".js-add-button");
  const clearBtn = document.querySelector(".js-clear-button");
  const todoListContainer = document.querySelector(".js-todo-list-container");
  const taskInputElem = document.querySelector(".js-task-input");
  const dateInputElem = document.querySelector(".js-date-input");

  todoListContainer.innerHTML = task.renderTaskList();

  addBtn.addEventListener("click", () => {
    task.addTask(taskInputElem, dateInputElem);
    todoListContainer.innerHTML = task.renderTaskList();
  });

  clearBtn.addEventListener("click", () => {
    task.clearTasks();
    todoListContainer.innerHTML = task.renderTaskList();
  });
}
