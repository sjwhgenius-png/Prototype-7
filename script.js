// script.js
const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector("#navMenu");

function setMenu(open) {
  if (!toggleBtn || !navMenu) return;
  navMenu.classList.toggle("is-open", open);
  toggleBtn.setAttribute("aria-expanded", String(open));
}

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    setMenu(!navMenu.classList.contains("is-open"));
  });

  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenu(false));
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


