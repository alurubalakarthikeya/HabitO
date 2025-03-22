// This file contains the JavaScript code for the frontend application, handling client-side logic and interactions.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('habit-form');
    const habitList = document.getElementById('habit-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const habitInput = document.getElementById('habit-input');
        const habitText = habitInput.value.trim();

        if (habitText) {
            const listItem = document.createElement('li');
            listItem.textContent = habitText;
            habitList.appendChild(listItem);
            habitInput.value = '';
        }
    });
});