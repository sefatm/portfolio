const repos = [
  {
    name: "portfolio",
    url: "https://github.com/sefatm/portfolio",
    language: "CSS",
    updated: "2026-07-23",
    summary: "Personal portfolio showcasing CV content, project case studies, screenshots, contact links, and GitHub Pages publishing."
  },
  {
    name: "E-commerce_Web",
    url: "https://github.com/sefatm/E-commerce_Web",
    language: "CSS",
    updated: "2026-07-22",
    summary: "E-commerce web application repository for marketplace catalogue, shopping workflow, and frontend/backend implementation."
  },
  {
    name: "Event-Management_web",
    url: "https://github.com/sefatm/Event-Management_web",
    language: "TypeScript",
    updated: "2026-07-22",
    summary: "Smart event management web platform with admin dashboard, event operations, booking analytics, and role-based modules."
  },
  {
    name: "E-Governance_Web",
    url: "https://github.com/sefatm/E-Governance_Web",
    language: "Java",
    updated: "2026-07-22",
    summary: "E-Governance web repository for municipal services, admin workflow, citizen modules, and Spring Boot based implementation."
  },
  {
    name: "Event-Management_Andriod",
    url: "https://github.com/sefatm/Event-Management_Andriod",
    language: "Android Java",
    updated: "2026-07-22",
    summary: "Android event management repository for participant app workflows, event browsing, bookings, tickets, and mobile UI."
  },
  {
    name: "E-commerce_Flutter",
    url: "https://github.com/sefatm/E-commerce_Flutter",
    language: "Java",
    updated: "2026-07-22",
    summary: "Flutter e-commerce mobile application repository with product catalogue and cart-oriented shopping screens."
  },
  {
    name: "E-commerce_Andriod",
    url: "https://github.com/sefatm/E-commerce_Andriod",
    language: "Android Java",
    updated: "2026-07-22",
    summary: "Android e-commerce repository for product browsing, authentication, order tracking, and mobile commerce workflows."
  },
  {
    name: "E-Governance_Flutter",
    url: "https://github.com/sefatm/E-Governance_Flutter",
    language: "Dart",
    updated: "2026-07-22",
    summary: "Flutter E-Governance repository for citizen service mobile screens and cross-platform government service access."
  },
  {
    name: "E-Governance_Andriod",
    url: "https://github.com/sefatm/E-Governance_Andriod",
    language: "Android Java",
    updated: "2026-07-22",
    summary: "Android E-Governance repository for citizen services, e-voting, e-tender, family cards, and service modules."
  }
];

const repoGrid = document.querySelector("#repoGrid");
const header = document.querySelector("[data-header]");
const chatWidget = document.querySelector("[data-chat-widget]");
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatClose = document.querySelector("[data-chat-close]");
const animatedHeadline = document.querySelector("[data-animated-headline]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

repoGrid.innerHTML = repos
  .map(
    (repo) => `
      <article class="repo-card">
        <div class="repo-meta">
          <span>${repo.language}</span>
          <span>${repo.updated}</span>
        </div>
        <h3><a href="${repo.url}" target="_blank" rel="noreferrer">${repo.name}</a></h3>
        <p>${repo.summary}</p>
      </article>
    `
  )
  .join("");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const setChatOpen = (isOpen) => {
  chatWidget.classList.toggle("is-open", isOpen);
  chatToggle.setAttribute("aria-expanded", String(isOpen));
};

chatToggle.addEventListener("click", () => {
  setChatOpen(!chatWidget.classList.contains("is-open"));
});

chatClose.addEventListener("click", () => {
  setChatOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setChatOpen(false);
  }
});

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  themeIcon.innerHTML = theme === "dark" ? "&#9728;" : "&#9790;";
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  themeIcon.innerHTML = theme === "dark" ? "&#9728;" : "&#9790;";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  localStorage.setItem("portfolioTheme", theme);
};

const savedTheme = localStorage.getItem("portfolioTheme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

if (animatedHeadline) {
  const words = animatedHeadline.textContent.trim().split(/\s+/);
  animatedHeadline.textContent = "";
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = `headline-word${index === 1 ? " is-accent" : ""}`;
    span.textContent = word;
    span.style.animationDelay = `${index * 430}ms`;
    animatedHeadline.appendChild(span);
  });
}
