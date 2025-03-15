// This file contains JavaScript code for the personal website. 
// It can be used to add interactivity, handle events, and manipulate the DOM.

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for future JavaScript code
    console.log("Welcome to Kynan Patterson's personal website!");

    // Example function to display an alert
    function showAlert() {
        alert("This is a placeholder alert for your personal website!");
    }

    // Example event listener for a button (to be added in HTML)
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', showAlert);
    }
});