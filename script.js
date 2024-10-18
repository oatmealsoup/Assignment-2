//Get DOM elements
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Look for name saved in localStorage
const savedName = localStorage.getItem('username');
if (savedName) {
  displayName.textContent = `Welcome, ${savedName}!`;
}

// Save name to localStorage when saveBtn is clicked
saveBtn.addEventListener('click', () => {
  const enteredName = usernameInput.value;
  if (enteredName) {
    localStorage.setItem('username', enteredName);
    displayName.textContent = `Welcome, ${enteredName}!`;
  }
});

// Clear username from localStorage
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('username');
  displayName.textContent = '';
});