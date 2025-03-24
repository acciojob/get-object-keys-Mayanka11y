//your JS code here. If required.
// Define the student object
// Define the student object
const student = {
  name: "John",
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Add getKeys as a prototype method (optional, but not necessary)
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Do not change the code below
window.student = student;
window.getKeys = getKeys;
