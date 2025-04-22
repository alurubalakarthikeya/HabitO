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