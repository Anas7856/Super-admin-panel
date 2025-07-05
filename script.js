document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("dailyChart").getContext("2d");

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    totalIncome: [48000, 47000, 46500, 55600, 47500, 46000, 47200],
  };

  Chart.defaults.font.family = "Poppins";
  Chart.defaults.font.size = 12;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Total Income",
          data: chartData.totalIncome,
          borderColor: "#ff0000",
          backgroundColor: "rgba(255, 226, 226, 1)",
          fill: true,
          tension: 0.1,
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#ff0000",
          pointBorderWidth: 3,
          pointHoverBackgroundColor: "#ff0000",
          pointHoverBorderColor: "#ffffff",
          pointHoverBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          titleColor: "#1e293b",
          bodyColor: "#64748b",
          borderColor: "#e2e8f0",
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: false,
          padding: 12,
          callbacks: {
            title: (ctx) => ctx[0].label,
            label: (ctx) =>
              `Total Income: $${(ctx.parsed.y / 1000).toFixed(1)}k`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "#f1f5f9", drawBorder: false },
          ticks: { color: "#64748b" },
        },
        y: {
          grid: { color: "#f1f5f9", drawBorder: false },
          ticks: {
            color: "#64748b",
            callback: (value) => `$${(value / 1000).toFixed(1)}k`,
          },
          max: 60000,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  });
});
