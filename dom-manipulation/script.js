// ✅ 1. Array of quotes
const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// ✅ 2. Get DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const showQuoteButton = document.getElementById("newQuote");
const quoteInput = document.getElementById("newQuoteText");
const categoryInput = document.getElementById("newQuoteCategory");

// ✅ 3. Function to display a random quote
function displayRandomQuote() {
  // Clear any existing quote
  while (quoteDisplay.firstChild) {
    quoteDisplay.removeChild(quoteDisplay.firstChild);
  }

  // ✅ Logic to select random quote
  if (quotes.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No quotes available.";
    quoteDisplay.appendChild(message);
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  // ✅ Update DOM with selected quote
  const quoteElement = document.createElement("p");
  quoteElement.textContent = `"${selected.text}" — [${selected.category}]`;
  quoteDisplay.appendChild(quoteElement);
}

// ✅ 4. Event listener on the "Show New Quote" button
showQuoteButton.addEventListener("click", displayRandomQuote);

// ✅ 5. Function to add a new quote
function addQuote() {
  const newText = quoteInput.value.trim();
  const newCategory = categoryInput.value.trim();

  // ✅ Logic to add new quote to array
  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });

    // Clear form inputs
    quoteInput.value = "";
    categoryInput.value = "";

    // ✅ Immediately update DOM with new quote
    displayRandomQuote();
  } else {
    alert("Please enter both a quote and a category.");
  }
}





  
 


 
