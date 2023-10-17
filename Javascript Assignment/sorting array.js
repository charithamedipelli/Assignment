const prompt = require("prompt-sync")({signit: true});
function sortArrayDescending(inputArray) {
  return inputArray.sort((a, b) => b - a);
}

// Input the array from the user (comma-separated values)
const inputArrayString = prompt("Enter an array of numbers:");

// Convert the input string into an array
const inputArray = inputArrayString.split(',').map(Number);

// Check if the user provided input
if (inputArray.length > 0 && !isNaN(inputArray[0])) {
  // Call the function to sort the array in descending order
  const sortedArray = sortArrayDescending(inputArray);

  // Print the sorted array
  console.log("Sorted array in descending order:", sortedArray);
} else {
  console.log("Invalid input or no input provided.");
}