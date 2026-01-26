const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector("#navMenu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


