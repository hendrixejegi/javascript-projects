import { task } from "../data/task.js";
import { renderProgressBar } from "../header/app-header.js";

export function renderBody() {
  task.renderTaskList();

  const addBtn = document.querySelector(".js-add-button");
  const clearBtn = document.querySelector(".js-clear-button");
  const todoListContainer = document.querySelector(".js-todo-list-container");
  const taskInputElem = document.querySelector(".js-task-input");
  const dateInputElem = document.querySelector(".js-date-input");

  function updateCheckboxListeners() {
    const checkboxElem = document.querySelectorAll('input[type="checkbox"');

    checkboxElem.length > 0 &&
      checkboxElem.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          const { taskId } = event.target.dataset;
          task.changeStatus(taskId);
          renderProgressBar();
        });
      });
  }

  todoListContainer.innerHTML = task.renderTaskList();
  updateCheckboxListeners();

  addBtn.addEventListener("click", () => {
    task.addTask(taskInputElem, dateInputElem);
    todoListContainer.innerHTML = task.renderTaskList();
    updateCheckboxListeners();
    renderProgressBar();
  });

  clearBtn.addEventListener("click", () => {
    task.clearTasks();
    todoListContainer.innerHTML = task.renderTaskList();
    renderProgressBar();
  });
}
