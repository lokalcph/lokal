const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const backCta = document.querySelector(".back_cta");

if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");

    const isOpen = menu.classList.contains("active");
    if (backCta) backCta.classList.toggle("menu-open", isOpen);
  });

  const links = document.querySelectorAll(".mobile-menu a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      backCta?.classList.remove("menu-open");
    });
  });
}
