
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.textContent = "☰";
        });
    });
}

// Automatically update footer year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
