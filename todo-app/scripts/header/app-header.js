import { renderQuote } from "./daily-quote.js";
import { task } from "../data/task.js";

export function renderHeader() {
  renderQuote();
  renderProgressBar();
}

export function renderProgressBar() {
  const progressBarElem = document.querySelector(".js-progress-bar-container");
  const progress = task.calculateProgress();
  const value = isNaN(progress) ? 0 : progress;

  progressBarElem.innerHTML = `
    <div class="progress-bar">
      <progress 
        id="pb"
        value="${value}" 
        max="100">
      </progress>
      <label for="pb">${value}%</label>
    </div>
  `;
}
