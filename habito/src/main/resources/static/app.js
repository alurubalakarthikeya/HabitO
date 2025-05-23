document.addEventListener("DOMContentLoaded", function () {
  const buttonLogin = document.getElementById("login-btn");
  const formBox = document.getElementById("formBox");

  function showHabiticaLoginForm() {
    formBox.innerHTML = `
      <form id="habiticaLoginForm">
        <div class="input-fields">
          <h2>Habitica Login</h2><hr>
          <div class="input-field">
            <label for="habiticaId">User ID</label><br>
            <div class="input-icon">
              <i class="fa-solid fa-user"></i>
              <input type="text" id="habiticaId" name="habiticaId" required>
            </div>
          </div>
          <div class="input-field">
            <label for="habiticaApi">API Token</label><br>
            <div class="input-icon">
              <i class="fa-solid fa-key"></i>
              <input type="text" id="habiticaApi" name="habiticaApi" required>
            </div>
          </div>
          <div class="btn-n">
            <button type="submit" onclick="handleLogin()">Login</button>
            <p><i>Where to find these creds?</i> <a href="https://habitica.com/user/settings/api" target="_blank">Click here</a></p>
          </div>
        </div>
      </form>
    `;

    function handleLogin() {
  const userId = document.getElementById("userId").value;
  const apiToken = document.getElementById("apiToken").value;

  if (!userId || !apiToken) {
    alert("Please fill in both fields.");
    return;
  }

  localStorage.setItem("habiticaUserId", userId);
  localStorage.setItem("habiticaApiToken", apiToken);

  // Navigate to home
  window.location.href = "home.html";
}


    document.getElementById("habiticaLoginForm").addEventListener("submit", async function (e) {
      e.preventDefault();
      const habiticaId = document.getElementById("habiticaId").value.trim();
      const habiticaApi = document.getElementById("habiticaApi").value.trim();

      try {
         const response = await fetch("https://habitica.com/api/v3/user", {
      method: "GET",
      headers: {
        "x-api-user": habiticaId,
        "x-api-key": habiticaApi,
        "Content-Type": "application/json"
      }
        });

        if (response.ok) {
          const userData = await response.json();
          const username = userData.data.profile.name;
          // Store the username in localStorage
          localStorage.setItem("habiticaUsername", username);
          window.location.href = "/home.html";
        } else {
          const text = await response.text();
          alert("Login failed: " + text);
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
      }
    });
  }

  if (buttonLogin) {
    buttonLogin.addEventListener("click", function () {
      showHabiticaLoginForm();
    });
  }

  showHabiticaLoginForm(); // Show form by default
});

// STREAK GRID ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("streakGrid");
  for (let i = 0; i < 110; i++) {
    const box = document.createElement("div");
    box.classList.add("streak-box");
    const intensity = Math.floor(Math.random() * 6);
    if (intensity > 0) box.classList.add(`intensity-${intensity}`);
    grid.appendChild(box);
  }

  const boxes = document.querySelectorAll(".streak-box");
  boxes.forEach(box => {
    const randomDelay = (Math.random() * 2).toFixed(2);
    box.style.animationDelay = `${randomDelay}s`;
  });
});