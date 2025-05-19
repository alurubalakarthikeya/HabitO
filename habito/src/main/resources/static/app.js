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

document.addEventListener("DOMContentLoaded", function () {
  const buttonLogin = document.getElementById("login-btn");
  const formBox = document.getElementById("form");
  const buttonText = document.getElementById("buttonText");

  function switchToLogin() {
      formBox.innerHTML = `
          <h2>Login</h2><hr>
          <div class="input-field">
              <label for="name">Username</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-user"></i>
                  <input type="text" id="name" name="username" required>
              </div>
          </div>
          
          <div class="input-field">
              <label for="password">Password</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-lock"></i>
                  <input type="password" id="password" name="password" required>
              </div>
          </div>
          
          <div class="btn-n">
              <button type="submit">Log In</button>
              <p>Don't have an account? <a href="#" id="switchToRegister">Register</a></p>
          </div>
      `;

      const switchToRegisterLink = document.getElementById("switchToRegister");
      switchToRegisterLink.addEventListener("click", function (e) {
          e.preventDefault(); 
          buttonText.innerText = "Login";
          switchToRegister();
      });
  }

  function switchToRegister() {
      formBox.innerHTML = `
          <h2>Register</h2><hr>
          <div class="input-field">
              <label for="name">Username</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-user"></i>
                  <input type="text" id="name" name="username" required>
              </div>
          </div>
          
          <div class="input-field">
              <label for="email">Email</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-envelope"></i>
                  <input type="email" id="email" name="email" required>
              </div>
          </div>
          
          <div class="input-field">
              <label for="password">Password</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-lock"></i>
                  <input type="password" id="password" name="password" required>
              </div>
          </div>
          
          <div class="input-field">
              <label for="confirmPassword">Confirm Password</label><br>
              <div class="input-icon">
                  <i class="fa-solid fa-lock"></i>
                  <input type="password" id="confirmPassword" name="confirmPassword" required>
              </div>
          </div>
          <div class="btn-n">
              <button type="submit">Register</button>
              <p>Already have an account? <a href="#" id="switchToLogin">Login</a></p>
          </div>
      `;
      const switchToLoginLink = document.getElementById("switchToLogin");
      switchToLoginLink.addEventListener("click", function (e) {
          e.preventDefault();
          buttonText.innerText = "Register";
          switchToLogin();
      });
  }
  const initialSwitchToLoginLink = document.getElementById("switchToLogin");
  if (initialSwitchToLoginLink) {
      initialSwitchToLoginLink.addEventListener("click", function (e) {
          e.preventDefault();
          buttonText.innerText = "Register";
          switchToLogin();
      });
  }
  buttonLogin.addEventListener("click", function () {
      if (buttonText.innerText === "Login") {
          buttonText.innerText = "Register";
          switchToLogin();
      } else {
          buttonText.innerText = "Login";
          switchToRegister();
      }
  });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    const addHabitBtn = document.querySelector(".add-habit");
    addHabitBtn.addEventListener("click", () => {
      alert("Redirect to Add Habit Page or Open Modal");
    });
  
    const calendarOptions = document.querySelectorAll(".calendar-options span");
    calendarOptions.forEach(option => {
      option.addEventListener("click", () => {
        calendarOptions.forEach(o => o.classList.remove("selected"));
        option.classList.add("selected");
        // You can add logic to update the calendar based on selected option
      });
    });
  });
  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const calendar = document.getElementById("calendar");

  months.forEach(month => {
    const monthBlock = document.createElement("div");
    monthBlock.className = "month-block";

    const title = document.createElement("h3");
    title.textContent = month;
    monthBlock.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    for (let i = 1; i <= 30; i++) {
      const day = document.createElement("div");
      day.className = "calendar-day";

      // randomly fill 40-60% of days
      if (Math.random() < 0.5) {
        day.classList.add("filled");
      }

      grid.appendChild(day);
    }

    monthBlock.appendChild(grid);
    calendar.appendChild(monthBlock);
  });

  // Login API Call
fetch("/api/users/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "carty", password: "mypassword" })
})
  .then(res => res.ok ? res.json() : Promise.reject("Login failed"))
  .then(user => console.log("Logged in:", user))
  .catch(err => alert(err));
fetch("/api/users/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "carty", email: "me@mail.com", password: "1234" })
})
