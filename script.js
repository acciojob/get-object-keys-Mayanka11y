//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Function to display the output on the webpage
function displayOutput(keys) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<p>Keys: ${keys.join(", ")}</p>`;
}

// Test the function and display the output
const keys = getKeys(student);
displayOutput(keys);

// Additional test cases
const studentWithMoreProperties = {
  name: "Jane",
  age: 22,
  city: "New York"
};

const moreKeys = getKeys(studentWithMoreProperties);
displayOutput(moreKeys);