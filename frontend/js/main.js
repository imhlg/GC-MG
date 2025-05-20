// This file contains general JavaScript functions for the website, such as initializing event listeners and handling common tasks.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners or other startup functions here
    console.log("eCommerce website loaded successfully.");
    
    // Example: Add event listener for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log(`Navigating to ${this.href}`);
        });
    });
});