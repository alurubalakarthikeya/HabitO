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
  