// Edite estes dados para personalizar os links e os contatos do portfólio.
const PORTFOLIO_CONFIG = {
  email: "contato@seudominio.com",
  whatsapp: "",
  instagram: ""
};

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#nav-links");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  navigation.classList.remove("is-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
}

const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}

function updateThemeButton() {
  if (!themeButton || !themeIcon) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeButton.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
  themeIcon.textContent = isDark ? "☀" : "☾";
}

updateThemeButton();
themeButton?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeButton();
});

function setExternalLink(selector, url) {
  const link = document.querySelector(selector);
  if (!link) return;
  if (!url) {
    link.hidden = true;
    return;
  }
  link.href = url;
}

const normalizedWhatsApp = PORTFOLIO_CONFIG.whatsapp.replace(/\D/g, "");
setExternalLink(
  ".social-whatsapp",
  normalizedWhatsApp ? `https://wa.me/${normalizedWhatsApp}` : ""
);

const instagramUrl = PORTFOLIO_CONFIG.instagram
  ? `https://www.instagram.com/${PORTFOLIO_CONFIG.instagram.replace(/^@/, "")}/`
  : "";
setExternalLink(".social-instagram", instagramUrl);

const emailLink = document.querySelector(".contact-email");
if (emailLink && PORTFOLIO_CONFIG.email) {
  emailLink.href = `mailto:${PORTFOLIO_CONFIG.email}`;
  emailLink.textContent = PORTFOLIO_CONFIG.email;
}

const contactForm = document.querySelector(".contact-form");
const formFeedback = document.querySelector(".form-feedback");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  if (!PORTFOLIO_CONFIG.email || PORTFOLIO_CONFIG.email === "contato@seudominio.com") {
    if (formFeedback) {
      formFeedback.textContent = "Configure seu e-mail em PORTFOLIO_CONFIG no arquivo script.js antes de receber solicitações.";
    }
    return;
  }

  const formData = new FormData(contactForm);
  const subject = `Solicitação de orçamento - ${formData.get("servico")}`;
  const message = [
    `Nome: ${formData.get("nome")}`,
    `E-mail: ${formData.get("email")}`,
    `Serviço: ${formData.get("servico")}`,
    "",
    "Sobre o projeto:",
    formData.get("mensagem")
  ].join("\n");

  window.location.href = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  if (formFeedback) {
    formFeedback.textContent = "Mensagem preparada. Se o aplicativo de e-mail não abriu, verifique sua configuração.";
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
