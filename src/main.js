const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
function onScroll() {
     let scrollPos = window.scrollY + 120;
     let currentId = "";
     sections.forEach((section) => {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
               currentId = section.getAttribute("id");
          }
     });
     navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + currentId) {
               link.classList.add("font-bold");
               link.style.color = "#3e6ff4";
          } else {
               link.classList.remove("font-bold");
               link.style.color = "";
          }
     });
}
window.addEventListener("scroll", onScroll);
window.addEventListener("DOMContentLoaded", onScroll);

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll(".nav-link") : [];
let mobileMenuOpen = false;
function toggleMobileMenu() {
     mobileMenuOpen = !mobileMenuOpen;
     if (mobileMenuOpen) {
          mobileMenu.classList.remove("hidden");
     } else {
          mobileMenu.classList.add("hidden");
     }
}
if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMobileMenu);
mobileMenuLinks.forEach((link) =>
     link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          mobileMenuOpen = false;
     })
);