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

const grid = document.getElementById("streakGrid");
  for (let i = 0; i < 110; i++) {
    const box = document.createElement("div");
    box.classList.add("streak-box");
    const intensity = Math.floor(Math.random() * 6); 
    if (intensity > 0) box.classList.add(`intensity-${intensity}`);

    grid.appendChild(box);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".streak-box");
    boxes.forEach(box => {
      const randomDelay = (Math.random() * 2).toFixed(2); 
      box.style.animationDelay = `${randomDelay}s`;
    });
  });

  const buttonLogin = document.getElementById("login-btn");

