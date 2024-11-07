import { task } from "../data/task.js";

export function renderBody() {
  task.renderTaskList();

  const addBtn = document.querySelector(".js-add-button");

  addBtn.addEventListener("click", () => {
    task.addTask();
  });
}
