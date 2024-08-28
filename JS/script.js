// Define the version of the script
version = "1.0.0";

// Main function to handle the dice rolls
function main() {
	// Get the maximum number from the input field
	var max = parseInt(document.getElementById("maxnum").value);
	// Get the number of rolls from the input field
	var rolls = parseInt(document.getElementById("rolls").value);
	// Initialize an empty array to store the count of each number rolled
	var count = [];

	// Fill the count array with zeros, one for each possible number
	for (var i = 0; i <= max - 1; i++) {
		count.push(0);
	}

	// Check if the input values are valid
	if (/*isNaN(min) || */ isNaN(max) || isNaN(rolls)) {
		alert("Please enter valid numbers!");
		return;
	}

	// Perform the dice rolls
	for (var i = 1; i <= rolls; i++) {
		// Get a random number between 1 and max
		var roll = getRandomNumber(1, max);
		// Increment the count for the rolled number
		count[roll - 1]++;
	}

	// Get the output div element
	var outputDiv = document.getElementById("output");

	// Remove any existing paragraph elements from the output div
	while (outputDiv.firstChild) {
		outputDiv.removeChild(outputDiv.firstChild);
	}

	// Display the count of each number rolled in the output div
	for (var j = 0; j <= count.length - 1; j++) {
		// Create a new paragraph element
		var pElement = document.createElement("p");
		// Set the text content of the paragraph element
		pElement.textContent = "Number " + (j + 1) + ": " + count[j];
		// Append the paragraph element to the output div
		outputDiv.appendChild(pElement);
	}
}

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add an event listener to the window object to listen for the Enter key press
window.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		main();
	}
});
