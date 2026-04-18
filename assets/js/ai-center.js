// ===== AI SUMMARY DATA =====
const aiSummary = [
  {
    title: "Total Requests",
    value: "1,245",
    change: "+12%",
  },
  {
    title: "Active Helpers",
    value: "342",
    change: "+8%",
  },
  {
    title: "Urgent Requests",
    value: "27",
    change: "-5%",
  },
  {
    title: "Avg Response Time",
    value: "3.2 min",
    change: "-10%",
  }
];

// ===== AI RECOMMENDATIONS =====
const aiRecommendations = [
  {
    title: "Need frontend help (React)",
    desc: "High demand, low helper availability",
    priority: "High"
  },
  {
    title: "Bug fixing (JavaScript)",
    desc: "Many unresolved issues reported",
    priority: "Medium"
  },
  {
    title: "UI/UX feedback requests",
    desc: "Trending category this week",
    priority: "Low"
  },
  {
    title: "API integration help",
    desc: "Growing demand in backend tasks",
    priority: "High"
  }
];

// ===== Render AI Summary =====
const summaryContainer = document.querySelector("[data-ai-summary]");

aiSummary.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("ai-card");

  div.innerHTML = `
    <p class="ai-title">${item.title}</p>
    <h3>${item.value}</h3>
    <span class="ai-change">${item.change}</span>
  `;

  summaryContainer.appendChild(div);
});

// ===== Render AI Recommendations =====
const recContainer = document.querySelector("[data-ai-recommendations]");

aiRecommendations.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("ai-rec");

  div.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
    <span class="priority ${item.priority.toLowerCase()}">${item.priority}</span>
  `;

  recContainer.appendChild(div);
});