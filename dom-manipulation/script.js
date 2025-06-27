// Quote storage array
const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = ""; // Clear previous quote

  if (quotes.length === 0) {
    const noQuote = document.createElement("p");
    noQuote.textContent = "No quotes available.";
    quoteDisplay.appendChild(noQuote);
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  const quoteText = document.createElement("p");
  quoteText.textContent = `"${selectedQuote.text}" — [${selectedQuote.category}]`;

  quoteDisplay.appendChild(quoteText);
}

// Event listener on the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    // Add to quotes array
    quotes.push({ text: newText, category: newCategory });

    // Clear input fields
    textInput.value = "";
    categoryInput.value = "";

    // Show feedback and display the newly added quote
    alert("Quote added!");
    displayRandomQuote();
  } else {
    alert("Please enter both quote and category.");
  }
}

 
