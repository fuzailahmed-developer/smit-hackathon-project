// ===== Leaderboard Data =====
const users = [
  {
    name: "Ali Khan",
    score: 980,
    contributions: 120,
    badge: "Gold Helper"
  },
  {
    name: "Sara Ahmed",
    score: 870,
    contributions: 98,
    badge: "Silver Helper"
  },
  {
    name: "Usman Tariq",
    score: 760,
    contributions: 85,
    badge: "Rising Star"
  },
  {
    name: "Ayesha Noor",
    score: 690,
    contributions: 70,
    badge: "Active Helper"
  }
];

// ===== Badge Data =====
const badges = [
  {
    title: "Gold Helper",
    desc: "Top contributors with excellent trust score"
  },
  {
    title: "Silver Helper",
    desc: "Consistent and reliable helpers"
  },
  {
    title: "Rising Star",
    desc: "New but highly active members"
  },
  {
    title: "Active Helper",
    desc: "Regular contributors in the community"
  }
];

// ===== Render Leaderboard =====
const rankList = document.querySelector("[data-rank-list]");

users.forEach((user, index) => {
  const div = document.createElement("div");
  div.classList.add("rank-item");

  div.innerHTML = `
    <div class="rank-left">
      <span class="rank-number">#${index + 1}</span>
      <div>
        <h3>${user.name}</h3>
        <p>${user.contributions} contributions</p>
      </div>
    </div>
    <div class="rank-right">
      <strong>${user.score}</strong>
      <span class="badge">${user.badge}</span>
    </div>
  `;

  rankList.appendChild(div);
});

// ===== Render Badges =====
const badgeShowcase = document.querySelector("[data-badge-showcase]");

badges.forEach(badge => {
  const div = document.createElement("div");
  div.classList.add("badge-item");

  div.innerHTML = `
    <h3>${badge.title}</h3>
    <p>${badge.desc}</p>
  `;

  badgeShowcase.appendChild(div);
});