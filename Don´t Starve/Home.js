const nav = document.querySelector("header");
const content = document.querySelector(".content");
const subMenu = document.querySelector(".subMenu");
const subMenu2 = document.querySelector(".subMenu2");
const subMenu3 = document.querySelector(".subMenu3")

const observerOptions = {
    rootMargin: "-200px 0px 0px 0px",
    threshold: 0.15
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
            nav.classList.add("navScroll"); // Přidá třídu pro nav
            subMenu.classList.add("subMenuColor");
            subMenu2.classList.add("subMenuColor"); // Přidá třídu pro sub-menu
            subMenu3.classList.add("subMenuColor");
        } else {
            nav.classList.remove("navScroll"); // Odebere třídu pro nav
            subMenu.classList.remove("subMenuColor");
            subMenu2.classList.remove("subMenuColor");
            subMenu3.classList.remove("subMenuColor") // Odebere třídu pro sub-menu
        }
    });
}, observerOptions);

observer.observe(content); // Sleduje prvek "content"
