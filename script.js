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

  // Close menu when a link is clicked (mobile)
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMenu(false));
  });

  // Close menu if user clicks outside
  document.addEventListener("click", (e) => {
    const target = e.target;
    const clickedInsideNav = navMenu.contains(target) || toggleBtn.contains(target);
    if (!clickedInsideNav) setMenu(false);
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


