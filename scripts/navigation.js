const navMenuToggle = (btn) => {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
  const icon = btn.querySelector("i");
  if (!nav.classList.contains("active")) {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  }
  handleMobileNav(nav, icon);
};
const handleMobileNav = (nav, icon) => {
  const navItems = document.querySelectorAll(".nav-menu__item a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("active");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });
};
window.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".nav-menu-toggle");
  menuToggle.addEventListener("click", () => navMenuToggle(menuToggle));
});
