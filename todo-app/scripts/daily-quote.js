import { quotes } from "./data/quotes.js";

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

const randomQuote = getRandomQuote();

function renderQuote() {
  const { quote, author } = randomQuote;

  const quoteHTML = `
    <p class="quote-of-day">
      <q>${quote}</q>
    </p>
    <p class="quote-author">${author}</p>
  `;

  document.querySelector(".js-daily-quote-container").innerHTML = quoteHTML;
}

renderQuote();
