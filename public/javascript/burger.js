// Henter elementet med klassen "burger" (burger-ikonet til mobilmenuen)
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
// Henter "tilbage"-linket, som skal skjules når menuen er åben
const backCta = document.querySelector(".back_cta");

// Tjekker om både burger og menu eksisterer på siden
if (burger && menu) {
  // Når der klikkes på burgeren:
  burger.addEventListener("click", () => {
    // Toggle "active"-klassen på både burger og menu (åbner/lukker menuen)
    burger.classList.toggle("active");
    menu.classList.toggle("active");

    // Tjekker om menuen er åben (dvs. har "active"-klassen)
    const isOpen = menu.classList.contains("active");
    // Hvis backCta findes, tilføj eller fjern "menu-open"-klassen alt efter om menuen er åben
    if (backCta) backCta.classList.toggle("menu-open", isOpen);
  });

  // Henter alle links i mobilmenuen
  const links = document.querySelectorAll(".mobile-menu a");
  // Tilføjer klik-event til hvert link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Luk menuen ved at fjerne "active"-klassen
      burger.classList.remove("active");
      menu.classList.remove("active");
      // Fjern også "menu-open"-klassen fra backCta (viser den igen)
      backCta?.classList.remove("menu-open");
    });
  });
}
