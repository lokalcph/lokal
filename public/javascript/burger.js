const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Luk menu når der klikkes på et link
  const links = document.querySelectorAll(".mobile-menu a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}
