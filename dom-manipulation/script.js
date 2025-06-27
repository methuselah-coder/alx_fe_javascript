const quotes = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
];

function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (quotes.length === 0) {
    quoteDisplay.innerText = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerText = `"${quote.text}" — [${quote.category}]`;
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });

    textInput.value = "";
    categoryInput.value = "";

    alert("Quote added successfully!");
  } else {
    alert("Please fill in both fields.");
  }
}
