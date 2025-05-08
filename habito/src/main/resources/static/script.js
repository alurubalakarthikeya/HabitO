// Generates dummy data for 365 days
function generateHeatmapData() {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const count = Math.floor(Math.random() * 6); // 0–5 intensity
      data.push({ date: date.toISOString().slice(0, 10), level: count });
    }
    return data.reverse(); // oldest to newest
  }
  
  function renderHeatmap() {
    const heatmap = document.getElementById("calendarHeatmap");
    const data = generateHeatmapData();
  
    // Pad start to align first day of the week
    const firstDate = new Date(data[0].date);
    const padDays = firstDate.getDay(); // 0=Sunday
    for (let i = 0; i < padDays; i++) {
      const pad = document.createElement("div");
      heatmap.appendChild(pad);
    }
  
    data.forEach((day) => {
      const square = document.createElement("div");
      square.className = "day-square";
      square.dataset.level = day.level;
      square.title = `${day.date} - ${day.level} habits`;
      heatmap.appendChild(square);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderHeatmap);
  

  document.addEventListener("DOMContentLoaded", () => {
    renderHeatmap(); // existing function
  
    // Render habit chart
    const ctx = document.getElementById("habitChart").getContext("2d");
    const habitChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: "Completion %",
            data: [70, 75, 80, 60, 85, 90, 80],
            fill: true,
            tension: 0.4,
            backgroundColor: "rgba(0,191,255,0.1)",
            borderColor: "#00BFFF",
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: "#00BFFF"
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: "#aaa"
            },
            grid: { color: "#333" }
          },
          x: {
            ticks: {
              color: "#aaa"
            },
            grid: { display: false }
          }
        }
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    dateElement.textContent = formattedDate;
  });

  const quotes = [
    {
      text: "Success is the product of daily habits—not once-in-a-lifetime transformations.",
      author: "James Clear",
      icon: "fa-solid fa-calendar-check"
    },
    {
      text: "Every action you take is a vote for the type of person you wish to become.",
      author: "James Clear",
      icon: "fa-solid fa-user-check"
    },
    {
      text: "Habits are the compound interest of self-improvement.",
      author: "James Clear",
      icon: "fa-solid fa-chart-line"
    },
    {
      text: "You do not rise to the level of your goals. You fall to the level of your systems.",
      author: "James Clear",
      icon: "fa-solid fa-cogs"
    },
    {
      text: "The secret to getting results that last is to never stop making improvements.",
      author: "James Clear",
      icon: "fa-solid fa-infinity"
    },
    {
      text: "Arise! Awake! and stop not until the goal is reached.",
      author: "Swami Vivekananda",
      icon: "fa-solid fa-mountain"
    },
    {
      text: "You have to dream before your dreams can come true.",
      author: "A.P.J. Abdul Kalam",
      icon: "fa-solid fa-cloud-moon"
    },
    {
      text: "If you want to shine like a sun, first burn like a sun.",
      author: "A.P.J. Abdul Kalam",
      icon: "fa-solid fa-sun"
    },
    {
      text: "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.",
      author: "Swami Vivekananda",
      icon: "fa-solid fa-comments"
    },
    {
      text: "People's blessings give you the power to work tirelessly. The only thing required is commitment.",
      author: "Narendra Modi",
      icon: "fa-solid fa-hands-helping"
    },
    {
      text: "The right moral compass is trying hard to think about what customers want.",
      author: "Sundar Pichai",
      icon: "fa-solid fa-compass"
    },
    {
      text: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "Elon Musk",
      icon: "fa-solid fa-rocket"
    },
    {
      text: "Most people need consistency more than they need intensity.",
      author: "James Clear",
      icon: "fa-solid fa-balance-scale"
    },
    {
      text: "Be the designer of your world and not merely the consumer of it.",
      author: "James Clear",
      icon: "fa-solid fa-drafting-compass"
    },
    {
      text: "The only way to become excellent is to be endlessly fascinated by doing the same thing over and over. You have to fall in love with boredom.",
      author: "James Clear",
      icon: "fa-solid fa-heart"
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      icon: "fa-solid fa-lightbulb"
    },
    {
      text: "Discipline is choosing between what you want now and what you want most.",
      author: "Abraham Lincoln",
      icon: "fa-solid fa-scale-balanced"
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
      icon: "fa-solid fa-hourglass-half"
    },
    {
      text: "Consistency is what transforms average into excellence.",
      author: "Tony Robbins",
      icon: "fa-solid fa-star"
    },
    {
      text: "Motivation gets you going, but discipline keeps you growing.",
      author: "John C. Maxwell",
      icon: "fa-solid fa-seedling"
    }
  ];
  

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quoteBox").innerHTML = `
    <p><i class="${quote.icon}"></i> <strong>${quote.text}</strong> – ${quote.author}</p>
  `;