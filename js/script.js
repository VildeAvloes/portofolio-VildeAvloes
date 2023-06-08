function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    console.log("klikk");
    navMenu.classList.toggle("active");
  });
}

hamburgerMenu();
