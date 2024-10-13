document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('username');
    const saveButton = document.getElementById('save-btn');
    const clearButton = document.getElementById('clear-btn');
    const displayName = document.getElementById('display-name');

    // Function to display the stored name if available
    function displayStoredName() {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            displayName.textContent = `Hello, ${storedName}!`;
        } else {
            displayName.textContent = '';
        }
    }

    // Save the name to localStorage
    saveButton.addEventListener('click', function () {
        const username = inputField.value.trim();
        if (username) {
            localStorage.setItem('name', username);
            displayStoredName();
        }
    });

    // Clear the name from localStorage
    clearButton.addEventListener('click', function () {
        localStorage.removeItem('name');
        displayStoredName();
    });

    // Display the stored name on page load
    displayStoredName();
});
