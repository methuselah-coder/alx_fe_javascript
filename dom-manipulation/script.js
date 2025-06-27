
// Array to hold all quotes
const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const showQuoteButton = document.getElementById("newQuote");
const quoteTextInput = document.getElementById("newQuoteText");
const quoteCategoryInput = document.getElementById("newQuoteCategory");

// Utility: Clear children from an element
function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// Function: Display a random quote
function displayRandomQuote() {
  clearElement(quoteDisplay);

  if (quotes.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No quotes available.";
    quoteDisplay.appendChild(message);
    return;
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const quoteParagraph = document.createElement("p");
  quoteParagraph.textContent = `"${randomQuote.text}" — [${randomQuote.category}]`;

  quoteDisplay.appendChild(quoteParagraph);
}

// Function: Add a new quote and update DOM
function addQuote() {
  const text = quoteTextInput.value.trim();
  const category = quoteCategoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });

    quoteTextInput.value = "";
    quoteCategoryInput.value = "";

    displayRandomQuote();
  } else {
    const warning = document.createElement("p");
    warning.style.color = "red";
    warning.textContent = "Both fields are required to add a quote.";

    clearElement(quoteDisplay);
    quoteDisplay.appendChild(warning);
  }
}

// Attach event listener to Show Quote button
showQuoteButton.addEventListener("click", displayRandomQuote);

// The "Add Quote" button calls addQuote() inline from the HTML
 


 
