import document from "document";

// Document references
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const resetButton = document.getElementById("reset-button");

const counter = document.getElementById("counter");

// Store count
let count = 0;

// Increment
plusButton.addEventListener("click", (evt) => {
  counter.text = ++count;
});

// Decrement
minusButton.addEventListener("click", (evt) => {
  counter.text = --count;
});

// Reset to 0
resetButton.addEventListener("click", (evt) => {
  count = 0;
  counter.text = count;
});