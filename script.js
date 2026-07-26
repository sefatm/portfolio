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

const municipalityScreens = [
  { src: "./assets/Municipality/Screenshot (729).png?v=20260726", caption: "Dashboard overview" },
  { src: "./assets/Municipality/Screenshot (730).png?v=20260726", caption: "Citizen service module" },
  { src: "./assets/Municipality/Screenshot (731).png?v=20260726", caption: "Application workflow" },
  { src: "./assets/Municipality/Screenshot (732).png?v=20260726", caption: "Trade license service" },
  { src: "./assets/Municipality/Screenshot (733).png?v=20260726", caption: "License approval panel" },
  { src: "./assets/Municipality/Screenshot (734).png?v=20260726", caption: "Holding tax registration" },
  { src: "./assets/Municipality/Screenshot (737).png?v=20260726", caption: "Tax assessment screen" },
  { src: "./assets/Municipality/Screenshot (738).png?v=20260726", caption: "Payment workflow" },
  { src: "./assets/Municipality/Screenshot (739).png?v=20260726", caption: "Complaint submission" },
  { src: "./assets/Municipality/Screenshot (740).png?v=20260726", caption: "Complaint tracking" },
  { src: "./assets/Municipality/Screenshot (741).png?v=20260726", caption: "Infrastructure requests" },
  { src: "./assets/Municipality/Screenshot (743).png?v=20260726", caption: "Road and drainage module" },
  { src: "./assets/Municipality/Screenshot (754).png?v=20260726", caption: "Health notice board" },
  { src: "./assets/Municipality/Screenshot (755).png?v=20260726", caption: "EPI registration" },
  { src: "./assets/Municipality/Screenshot (756).png?v=20260726", caption: "EPI administration" },
  { src: "./assets/Municipality/Screenshot (757).png?v=20260726", caption: "Project management" },
  { src: "./assets/Municipality/Screenshot (758).png?v=20260726", caption: "Project budget" },
  { src: "./assets/Municipality/Screenshot (759).png?v=20260726", caption: "Water connection" },
  { src: "./assets/Municipality/Screenshot (761).png?v=20260726", caption: "Water billing" },
  { src: "./assets/Municipality/Screenshot (762).png?v=20260726", caption: "Waste schedule" },
  { src: "./assets/Municipality/Screenshot (763).png?v=20260726", caption: "Pickup request" },
  { src: "./assets/Municipality/Screenshot (764).png?v=20260726", caption: "Ward management" },
  { src: "./assets/Municipality/Screenshot (765).png?v=20260726", caption: "GIS ward map" },
  { src: "./assets/Municipality/Screenshot (766).png?v=20260726", caption: "Holding location map" },
  { src: "./assets/Municipality/Screenshot (767).png?v=20260726", caption: "E-tender notices" },
  { src: "./assets/Municipality/Screenshot (768).png?v=20260726", caption: "Tender bid workflow" },
  { src: "./assets/Municipality/Screenshot (769).png?v=20260726", caption: "Tender admin panel" },
  { src: "./assets/Municipality/Screenshot (770).png?v=20260726", caption: "E-voting management" },
  { src: "./assets/Municipality/Screenshot (771).png?v=20260726", caption: "Voter registration" },
  { src: "./assets/Municipality/Screenshot (772).png?v=20260726", caption: "Candidate approval" },
  { src: "./assets/Municipality/Screenshot (774).png?v=20260726", caption: "Voting analytics" },
  { src: "./assets/Municipality/Screenshot (775).png?v=20260726", caption: "Social card application" },
  { src: "./assets/Municipality/Screenshot (776).png?v=20260726", caption: "Social card admin" },
  { src: "./assets/Municipality/Screenshot (777).png?v=20260726", caption: "Notice management" },
  { src: "./assets/Municipality/Screenshot (778).png?v=20260726", caption: "Notification center" },
  { src: "./assets/Municipality/Screenshot (779).png?v=20260726", caption: "Reports and analytics" },
  { src: "./assets/Municipality/Screenshot (780).png?v=20260726", caption: "System settings" }
];

const municipalitySlider = document.querySelector("[data-municipality-slider]");
const municipalityImage = document.querySelector("[data-municipality-image]");
const municipalityCaption = document.querySelector("[data-municipality-caption]");
const municipalityCounter = document.querySelector("[data-municipality-counter]");
const municipalityStyles = ["slide-zoom", "slide-rise", "slide-tilt", "slide-pan", "slide-soft", "slide-reveal"];

if (municipalitySlider && municipalityImage && municipalityScreens.length > 1) {
  let municipalityIndex = 0;

  municipalityStyles.forEach((style) => municipalitySlider.classList.remove(style));
  municipalitySlider.classList.add(municipalityStyles[0]);

  setInterval(() => {
    municipalityIndex = (municipalityIndex + 1) % municipalityScreens.length;
    const next = municipalityScreens[municipalityIndex];
    const nextStyle = municipalityStyles[municipalityIndex % municipalityStyles.length];

    municipalitySlider.classList.add("is-changing");

    window.setTimeout(() => {
      municipalityStyles.forEach((style) => municipalitySlider.classList.remove(style));
      municipalitySlider.classList.add(nextStyle);
      municipalityImage.src = next.src;
      municipalityImage.alt = `E-Governance Management System screenshot - ${next.caption}`;
      if (municipalityCaption) municipalityCaption.textContent = next.caption;
      if (municipalityCounter) {
        municipalityCounter.textContent = `${String(municipalityIndex + 1).padStart(2, "0")} / ${municipalityScreens.length}`;
      }
      municipalitySlider.classList.remove("is-changing");
    }, 520);
  }, 3000);
}
