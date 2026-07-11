const repos = [
  {
    name: "Spring1",
    url: "https://github.com/sefatm/Spring1",
    language: "Java",
    updated: "2026-04-27",
    summary: "Recent Java/Spring practice repository from the public GitHub profile."
  },
  {
    name: "jsp",
    url: "https://github.com/sefatm/jsp",
    language: "Java",
    updated: "2026-03-04",
    summary: "Java web practice repository focused on JSP fundamentals."
  },
  {
    name: "Hospital-Management",
    url: "https://github.com/sefatm/Hospital-Management",
    language: "Project",
    updated: "2026-02-24",
    summary: "Management-system repository aligned with CRUD and admin workflow experience."
  },
  {
    name: "ProductManagement",
    url: "https://github.com/sefatm/ProductManagement",
    language: "Java",
    updated: "2026-02-07",
    summary: "Product management application practice with Java backend concepts."
  },
  {
    name: "swing_jdbc_id",
    url: "https://github.com/sefatm/swing_jdbc_id",
    language: "Java",
    updated: "2026-01-22",
    summary: "Desktop Java Swing and JDBC practice repository."
  },
  {
    name: "sefatm.github.io",
    url: "https://github.com/sefatm/sefatm.github.io",
    language: "HTML",
    updated: "2025-11-02",
    summary: "GitHub Pages repository for publishing a personal portfolio."
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
          <span>Updated ${repo.updated}</span>
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
