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

function openNav() {
    document.getElementById("navSlide").style.width = "250px";
    document.getElementById("menuBar").style.display = "none";
    document.getElementById("closeBtn").style.display = "block";
}
  
function closeNav() {
    document.getElementById("navSlide").style.width = "0";
    document.getElementById("menuBar").style.display = "block";
    document.getElementById("closeBtn").style.display = "none";
}