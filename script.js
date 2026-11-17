// ========================================
// NTCM — NexTec Commtech Models
// Main JavaScript
// ========================================


// DISCORD CONFIGURATION

const DISCORD_INVITE = "https://discord.gg/U6FpEDqWb6";


// ========================================
// DISCORD BUTTON
// ========================================

const discordButton = document.getElementById("discordButton");

if (discordButton) {
    discordButton.href = DISCORD_INVITE;
    discordButton.target = "_blank";
    discordButton.rel = "noopener noreferrer";
}


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after selecting a section

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", event => {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .product-card, .process-card, .pricing-content, .support-box, .hero-content, .hero-visual"
);

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (header) {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }

}, { passive: true });


// ========================================
// CLOSE MOBILE MENU ON RESIZE
// ========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 700 && navMenu && menuToggle) {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// ========================================
// CONSOLE BRANDING
// ========================================

console.log(
    "%cNTCM | NexTec Commtech Models",
    "color: #35D5FF; font-size: 18px; font-weight: bold;"
);

console.log(
    "%cPractical tools. Simpler management.",
    "color: #8FA9CC; font-size: 12px;"
);
