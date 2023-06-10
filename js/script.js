const hamburgerButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let listItem = document.querySelectorAll(".nav-menu li a");

function toggleMenu() {
  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  listItem.forEach((a) => {
    a.addEventListener("click", () => {
      // e.preventDefault();
      navMenu.classList.remove("active");
    });
  });
}

toggleMenu();
