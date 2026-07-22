const repos = [
  {
    name: "portfolio",
    url: "https://github.com/sefatm/portfolio",
    language: "HTML/CSS/JS",
    updated: "2026-07-23",
    summary: "Personal portfolio with CV content, project case studies, screenshots, contact links, and GitHub Pages publishing."
  },
  {
    name: "Event-Management_web",
    url: "https://github.com/sefatm/Event-Management_web",
    language: "Angular",
    updated: "2026-07-23",
    summary: "Smart event management web platform with admin dashboard, event operations, booking analytics, and role-based modules."
  },
  {
    name: "E-commerce_Flutter",
    url: "https://github.com/sefatm/E-commerce_Flutter",
    language: "Dart",
    updated: "2026-07-23",
    summary: "Flutter e-commerce mobile application with product catalog, cart-oriented shopping screens, and responsive Material UI."
  },
  {
    name: "E-Governance Management System",
    url: "https://github.com/sefatm",
    language: "Angular + Spring Boot",
    updated: "CV project",
    summary: "Bilingual municipal service portal covering citizen services, e-voting, e-tender, holding tax, social cards, GIS, and admin workflows."
  },
  {
    name: "Android Citizen Service App",
    url: "https://github.com/sefatm",
    language: "Android Java",
    updated: "CV project",
    summary: "Native Android citizen service app consuming Spring Boot REST APIs with authentication, Firebase notifications, and real-time data sync."
  },
  {
    name: "Android E-Commerce App",
    url: "https://github.com/sefatm",
    language: "Android Java",
    updated: "CV project",
    summary: "Native Android commerce app for product browsing, user authentication, order tracking, push notifications, and backend synchronization."
  }
];

const repoGrid = document.querySelector("#repoGrid");
const header = document.querySelector("[data-header]");
const chatWidget = document.querySelector("[data-chat-widget]");
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatClose = document.querySelector("[data-chat-close]");
const animatedHeadline = document.querySelector("[data-animated-headline]");

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

if (animatedHeadline) {
  const words = animatedHeadline.textContent.trim().split(/\s+/);
  animatedHeadline.textContent = "";
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = `headline-word${index === 1 ? " is-accent" : ""}`;
    span.textContent = word;
    span.style.animationDelay = `${index * 260}ms`;
    animatedHeadline.appendChild(span);
  });
}